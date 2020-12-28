import express from 'express'
import getExpeditiousCache from 'express-expeditious'
import expeditiousEngineRedis from 'expeditious-engine-redis'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import passport from 'passport'
import * as socketIO from 'socket.io'
import streamRoutes from './app/routes/streams.js'
import usersRoutes from './app/routes/users.js'
import authRoutes from './app/routes/auth.js'
import categoriesRoutes from './app/routes/categories.js'
import endViewer from './app/controllers/streams/endViewer.js'

const app = express()

// Setup express server port from ENV, default: 3001
app.set('port', process.env.PORT || 3001)

// Enable only in development HTTP request logger middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Redis cache enabled by env variable
if (process.env.USE_REDIS === 'true') {
  const cache = getExpeditiousCache({
    namespace: 'expresscache',
    defaultTtl: '1 minute',
    engine: expeditiousEngineRedis({
      redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
      }
    })
  })
  app.use(cache)
}

// for parsing json
app.use(
  bodyParser.json({
    limit: '20mb'
  })
)
// for parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true
  })
)

// Init all other stuff
app.use(cors())
app.use(passport.initialize())
app.use(compression())
app.use(helmet())
app.use(express.static('public'))

// Add socket io to all req
let webSocket
const addSocketIO = (req, _, next) => {
  // create io var to access in router later
  req.io = webSocket
  next()
}

app.use('/streams', addSocketIO, streamRoutes)
app.use('/auth', addSocketIO, authRoutes)
app.use('/categories', addSocketIO, categoriesRoutes)
app.use('/users', addSocketIO, usersRoutes)

const server = app.listen(app.get('port'))
// add socket io and cors policy to server
webSocket = new socketIO.Server(server, {
  cors: {
    origin: '*'
  }
})

// fire event on
webSocket.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`)

  socket.on('disconnect', async (reason) => {
    console.log(`User ${socket.id} disconnected because ${reason}`)
    await endViewer(socket.id)
  })

  socket.on('viewerDisconnect', async ({name, nickname}) => {
    console.log(`A viewer has left the Stream`)
    await endViewer(socket.id)
    
    socket
      .in(nickname)
      .emit('viewerDisconnected', { name: name, message: `A viewer has left the Stream`})
    socket.leave(nickname)
  })
})

export default app
