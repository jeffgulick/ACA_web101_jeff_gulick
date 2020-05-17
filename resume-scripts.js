// this function adds a css animation and then removes it
const picBounce = () => {
    const ronald = document.getElementById("clown");
    ronald.classList.add('animate__animated', 'animate__fadeOutDown');
    //This removes the class "animate" and sets back to default class//
    ronald.addEventListener('animationend', () => {
        ronald.classList.remove('animate__animated', 'animate__fadeOutDown')
      });
}

const rotate = () => {
  const mcdonald = document.getElementById("title");
  mcdonald.classList.add('animate__animated', 'animate__flip');
  //This removes the class "animate" and sets back to default class//
  mcdonald.addEventListener('animationend', () => {
      mcdonald.classList.remove('animate__animated', 'animate__flip')
    });
}

const fade_in = () => {
  const phone = document.getElementById("number");
  phone.classList.add('animate__animated', 'animate__fadeIn');
  //This removes the class "animate" and sets back to default class//
  phone.addEventListener('animationend', () => {
      phone.classList.remove('animate__animated', 'animate__fadeIn')
    });
}

const appear=()=> {
  let x = document.getElementById("number");
  if(x.innerHTML === "(555)xxx.xxxx") {
    fade_in()
    x.innerHTML = "(555)555.1234";
  } else {
    fade_in()
    x.innerHTML = "(555)xxx.xxxx";
  }
}

// function appear() {
//   var x = document.getElementById("number");
//   if (x.innerHTML === "(555)xxx.xxxx") {
//     fade_in()
//     x.innerHTML = "(555)555.5555";
//   } else {
//     fade_in()
//     x.innerHTML = "(555)xxx.xxxx";
//   }
// }
