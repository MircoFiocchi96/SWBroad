// /* eslint handle-callback-err: "off"*/

// process.env.NODE_ENV = 'test'

// import chai from 'chai'
// import chaiHttp from 'chai-http'
// //import server from '../server.js'
// import StreamService from '../app/services/streamService.js'
// import sinon from 'sinon'
// import passport from 'passport'

// let server
// const should = chai.should()

// /* Create objects to test */
// chai.use(chaiHttp)
// const sandbox = sinon.createSandbox()

// xdescribe('Api test - GetStream', () => {
//   before(async () => {
//     sinon.stub(passport, 'authenticate').callsFake((req, res, next) => {
//       req.user = pepe
//       next()
//     })
//     let mod = await import('../server.js')
//     server = mod.default
//   })

//   beforeEach(() => {
//     sinon.stub(StreamService.prototype, 'getStream').returns({ pepe: 3 })

//   })

//   afterEach(() => {
//     StreamService.prototype.getStream.restore()
//     passport.authenticate.restore()
//     //  sandbox.restore()
//   })

//   describe('/GET stream/id=x', () => {
//     describe('Success cases', async () => {
//       //server2 = await import('../server.js')
//       it('should return a stream', (done) => {
//         chai
//           .request(server)
//           .get('/streams/id=3')
//           .end((err, res) => {
//             res.should.have.status(200)
//             done()
//           })
//       })
//       it('should get streams by category', (done) => {
//         chai
//           .request(server)
//           .get('/streams/id=1')
//           .end((err, res) => {
//             res.should.have.status(200)
//             done()
//           })
//       })
//       xit('should get streams by category that were finished', (done) => {
//         chai
//           .request(server)
//           .get('/streams?category=sports&page=1&limit=5&finished=true')
//           .end((err, res) => {
//             res.should.have.status(200)
//             done()
//           })
//       })
//     })
//   })
// })
