/* eslint-env jest */

// this command loads the mocked request
jest.mock('../request')

const github = require('../github')

// A simple example test
describe('#getUser() using Promises', () => {
  it('should load user data', () => {
    return github.getUser('splashinn')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.name).toEqual('Kyle Maune')
    })
  })
})
