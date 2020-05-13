const picBounce = () => {
    const ronald = document.getElementById("clown");
    ronald.classList.add('animate__animated', 'animate__fadeInLeft');
    //This removes the class "animate" and sets back to default class
    ronald.addEventListener('animationend', () => {
        ronald.classList.remove('animate__animated', 'animate__fadeInLeft')
      });
}

