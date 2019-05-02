window.onload = function() {
  const body = document.body;

  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )
  function createDuck(){
    let duck = document.createElement('div')
    duck.classList.add('duck')
    randomPosition()
    body.appendChild(duck)

    duck.addEventListener("click", function () {
      this.classList.add('shot')
      setTimeout(deleteDuck, 1000)

    })

    function checkForWinner (){
      if(document.querySelectorAll('.duck').length < 1){
        alert('YOU WIN!!!!!!')
      }
    }

    function deleteDuck(){
      body.removeChild(duck)
      checkForWinner()
    }


      function flapClass() {
        duck.classList.toggle('flap')
      }

      setInterval(flapClass, 250)

      // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
      // a function `moveDuck` that takes a duck object as an argument and sets the
      // "top" and "left" CSS properties.
      // HINT: Use Math.random() * window.innerWidth    for "left"
      //       And Math.random() * window.innerHeight   for "top"

      function moveDuck() {
        let top = Math.random() * window.innerHeight
        let left = Math.random() * window.innerWidth

        duck.style.top = `${top}px`
        duck.style.left = `${left}px`
      }

      function randomPosition () {
        duck.style.top = Math.floor(Math.random() * window.innerHeight) + "px"
        duck.style.left = Math.floor(Math.random() * window.innerWidth)
      }



      // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

      setInterval(moveDuck, 1000)



    return duck
  }


for(let i = 0; i<5; i++){
  createDuck()
}





  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // FIN. You win 1 trillion tokens.  Play the day away!
};
