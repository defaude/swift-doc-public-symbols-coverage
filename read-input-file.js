const path = require('path')
const { accessSync, constants, readFileSync } = require('fs')

module.exports = function readInputFile(location) {
  const inputPath = path.resolve(process.cwd(), location)
  accessSync(inputPath, constants.R_OK)
  return JSON.parse(readFileSync(inputPath, { encoding: 'utf8' }))
}
