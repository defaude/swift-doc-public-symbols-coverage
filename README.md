# swift-doc-public-symbols-coverage

This shows how to get a breakdown of how well the public symbols of a [Swift](https://www.swift.org/) project are
documented. In a nutshell, we're parsing the output of [swift-doc](https://github.com/SwiftDocOrg/swift-doc) and making
it look nice.

## Prerequisites

* [swift-doc](https://github.com/SwiftDocOrg/swift-doc)
* [jq](https://stedolan.github.io/jq/)
* [Node.js](https://nodejs.org/)

## Print documentation coverage

```shell
# generate "raw" swift-doc output
swift doc coverage <PATH(S)> --output coverage.json

# grab the symbols (and potentially filter some things, e.g. "Vendors/**")
jq '[.data.symbols[] | select(.file | test("^Vendors\/") | not)]' < coverage.json > symbols.json 

# parse symbols.json and output summary
node /path/to/swift-doc-public-symbols-coverage/get-coverage.js symbols.json
```
