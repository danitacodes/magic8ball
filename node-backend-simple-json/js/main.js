document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api/ask`)
  const data = await res.json()

  console.log(data);
  document.querySelector("h2").innerText = data
  
}