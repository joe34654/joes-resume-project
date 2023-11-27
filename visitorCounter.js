async function main() {
  const Url='https://gc7ohowr1l.execute-api.us-east-1.amazonaws.com/'
  fetch(Url)
  .then(data=>{return data.json()})
  .then(res=>{console.log(res)})

  function display(res) {
  document.getElementById("counter").innerHTML = "Visitor Count: " + res
  }  
}