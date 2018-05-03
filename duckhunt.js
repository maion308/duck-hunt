jQuery(function() {
  // I'll do some of the work for you, first I will grab the <body></body>
  const $body = $('body');

  // 1. Can you create a <div> with the class "duck" and name it "duck"

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"

  // 4. Try making the duck move to a different location after 1 second

  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  // 8a. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //    it creates a duck, it appears in a random location
  // 8b. The ducks should also move to a random location after 1 second
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 9. Our ducks are going to be easy targets if they only move once.
  //    Modify createDuck() so the ducks keep moving around

  // 10. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second)

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying

  // FIN. You win 1 trillion tokens.  Play the day away!
});
