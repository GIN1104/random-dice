
let out = document.querySelector(".out");
let out2 = document.querySelector("#out2");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".out");

const time = 1000;
const step = 1;  

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


 let getResult = function() {
    // console.log(getRndInteger(1, 12))
    // out.innerHTML = " "
   
    outNum(12, '#out'); 
    setTimeout(
    function(){
      let res = getRndInteger(1, 12)
      console.log(res)
    out.innerHTML = res
    out2.innerHTML += `Result :  ${res}  <br> `
  }, 1000
    )
}
btn.onclick = getResult;
btn2.onclick = getResult;




function outNum(num, elem) {
  let e = document.querySelector('#out');
  let n = 0;
  let t = Math.round(time/(num/step));
  let interval = setInterval(() => {
      n = n + step;
      if(n == num) {
            clearInterval(interval);
       }
  e.innerHTML = n;
              },
t);
};