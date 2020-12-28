import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.use('*', (req, res) => {
  res.status(404).json({
    errors: {
      msg: 'URL_NOT_FOUND'
    }
  })
})

export default router
