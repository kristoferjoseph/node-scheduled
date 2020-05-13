const data = require('@begin/data')

exports.handler = async function scheduled (event) {
  console.log(JSON.stringify(event, null, 2))
  let pages = await data.page({
    table: 'my-data',
    limit: 100
  })

  let count = 0
  for await (let page of pages) {
    count = count + 1
    console.log(
      'Page: ', page, '\n',
      'Count: ', count, '\n'
    )
  }
  // Now save a copy wherever you like. S3 etc.
  return
}
