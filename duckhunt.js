window.onload = function() {
  const body = document.body;

  console.log(body);

  function createDuck() {
    let duck = document.createElement("div");
    duck.classList.add("duck");
    randomPosition();
    body.appendChild(duck);

    duck.addEventListener("click", function() {
      this.classList.add("shot");
      setTimeout(deleteDuck, 1000);
    });

    function checkForWinner() {
      if (document.querySelectorAll(".duck").length < 1) {
        alert("YOU WIN!!!!!!");
      }
    }

    function deleteDuck() {
      body.removeChild(duck);
      checkForWinner();
    }

    function flapClass() {
      duck.classList.toggle("flap");
    }

    setInterval(flapClass, 250);

    function moveDuck() {
      let top = Math.random() * window.innerHeight;
      let left = Math.random() * window.innerWidth;

      duck.style.top = `${top}px`;
      duck.style.left = `${left}px`;
    }

    function randomPosition() {
      duck.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      duck.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }

    setInterval(moveDuck, 1000);

    return duck;
  }

  for (let i = 0; i < 5; i++) {
    createDuck();
  }

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // FIN. You win 1 trillion tokens.  Play the day away!
};
