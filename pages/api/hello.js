// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fetch = require('fetch')

export default function handler(req, res) {
  const fetchDoc = fetch('https://gist.githubusercontent.com/CliffCrerar/f8d7225929fa42cbbc27639e6fc5d2f7/raw/dff741eb605e41ccf0e36d1e1f13835bf203b64e/react-props-beginner-demo');
  fetchDoc.then(docFetchRef => {
    res.text().then(docFetchRefTxt => {
        console.log(docFetchRefTxt);
    })
})
  res.status(200).text("name: 'John Doe'")
}
