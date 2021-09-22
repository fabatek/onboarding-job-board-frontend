import axios from 'axios';

const URL = 'https://61484173035b3600175b9d08.mockapi.io/api/jobs/jobs'

module.exports = axios.get

module.exports = {
  get: async () => {
  const response = await axios.get(URL)
  return response.data
  }
}


const axiosMock = require('axios')

test('async axios action job list with mock', async (done) => {
  const response = await axiosMock(URL)

  expect(response).toBeDefined()
  expect(response.length).toBe(100);
  done()
});