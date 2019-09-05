window.onload = function() {
  const body = document.body;
  
  console.log(body);
  
function createDuck() {
  // 1. Create a div element assigned to the variable duck
  const duck = document.createElement("div");
  // 2. Add the class duck to the element
  duck.classList.add('duck');
  // 3. append the div element to the body
  body.appendChild(duck);
  var myleft = Math.random() * window.innerWidth + 'px';
  var mytop = Math.random() * window.innerHeight + 'px';
 

  // 4. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp
  setInterval(() => { 
    duck.classList.toggle("flap");
  }, 550);

  // 5. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // working on finding a way to get this function to work properly
  // function moveDuck(duck){
  //   function css(el, styles) {
  //     for (prop in styles)
  //         el.style[prop] = styles[prop];
  // }
  //   var el = document.querySelector('div');
  //   css(el, { position: "absolute", top: mytop, left: myleft });
  // }
  
  function moveDuck(duck) {

    duck.style.left = myleft
    duck.style.top = mytop
  }

  // 6. Try making the duck move to a different location every second
  // (Hint! what did we use to do this several lines up??)

  function randomPosition(){
duck.style.top = mytop;
duck.style.left = myleft
moveDuck();
}
  
  setInterval(()=> {
    moveDuck(duck)
  }, 1000);
  
  function checkForWinner() {
    var ducks = document.getElementsByClassName("duck");
    if (ducks.length == 1) {
      alert("YOU WIN!");
    }
  }

  duck.addEventListener("click", () => {
    duck.classList.toggle("shot") 
    setTimeout(() => {
      duck.remove(duck)
    }, 100);
    console.log(duck);

    checkForWinner();
    });
}

  // ---------------------------- PART 2 ---------------------------------
  // 1. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() wraps around everything we did in 1-6
  //    and "returns" the duck

  // 2. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
  for (let i = 0; i < 5; i++) {
    createDuck();
  }

  // 3. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations (remember top & left)
  //       inside your `moveDuck()` function;

  // --------------------------- PART 3 ------------------------------------

  // 1. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!


  // 2. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain



  // 3. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?,
  //     and how can we see how many elements we get back) If not, alert "YOU WIN!"


  // 4. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 5. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing
};

