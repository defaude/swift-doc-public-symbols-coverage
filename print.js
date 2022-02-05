function leftPad (input, length) {
  const diff = length - ('' + input).length
  if (diff === 0) {
    return input
  } else {
    const pad = Array(diff + 1).join(' ')
    return `${pad}${input}`
  }
}

function pluralize (input) {
  if (input.charAt(input.length - 1) === 's') {
    return `${input}es`
  } else {
    return `${input}s`
  }
}

module.exports = function print ({ hasDocs, items }, type) {
  const percentage = leftPad((hasDocs / items * 100).toFixed(1), 4)
  const documented = leftPad(hasDocs, 3)
  const all = leftPad(items, 3)
  console.log(`${percentage}% (${documented} of ${all}) ${pluralize(type)}`)
}
