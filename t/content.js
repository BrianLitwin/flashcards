// content.js

const sendData = (question) => {
  const selection = window.getSelection()
  const answer = selection.toString()
  const url = window.location.href
  const page_offset = window.pageYOffset
  const body = JSON.stringify({ answer, url, page_offset, question })
  fetch("http://localhost:8001/api/card/", {
    method: 'POST',
    headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
    },
    body: body,
  }).then((resp) => { console.log(resp)})
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request.message)
  sendData(request.message)
});
