const readInputFile = require('./read-input-file')
const print = require('./print')

const inputArg = process.argv[2]

if (!inputArg) {
  console.error('Please provide a path to the JSON file with the symbols as described in https://github.com/defaude/swift-doc-public-symbols-coverage/blob/main/README.md')
  process.exit(1)
}

let symbols
try {
  symbols = readInputFile(inputArg)

} catch (error) {
  console.error('Failed to read input file.', error)
  process.exit(1)
}

try {
  const totals = new Map()
  const overall = { items: 0, hasDocs: 0 }

  for (const item of symbols) {
    const total = totals.get(item.type) || { items: 0, hasDocs: 0 }

    total.items++
    overall.items++

    if (item.documented) {
      total.hasDocs++
      overall.hasDocs++
    }

    totals.set(item.type, total)
  }

  console.log('========= DOCUMENTED ==========')
  for (const [type, total] of totals) {
    print(total, type)
  }

  console.log('============ TOTAL ============')
  print(overall, 'Symbol')

} catch (error) {
  console.error('Failed to parse input file contents.', error)
  process.exit(1)
}
