const eightBall =  document.querySelector('.ball');

document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api/ask`)
  const data = await res.json()
  eightBall.classList.add('animate__shakeY') // adds animation class
  await new Promise(r => setTimeout(r, 2500)); // timesouts to left css animation finish
  console.log(data);
  document.querySelector("h2").innerText = data
  eightBall.classList.remove('animate__shakeY') // removes animation class
  
}