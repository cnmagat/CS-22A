/*global confirm:false, alert:false, window:false*/
// The global jslint comment can contain a comma separated list of names.
// Each name can optionally be followed by a colon and either true or false,
// true indicating that the variable may be assigned to by this file, and
// false indicating that assignment is not allowed (which is the default).
/*jslint browser:true*/
// true if the standard browser globals should be predefined.
// This option will reject the use of import and export from the new sixth edition of ECMAScript [ES6].
// This option also disallows the file form of the 'use strict' pragma.
// It does not supply self or window;
// you will have to request these aliases of the dreaded global object yourself.

/*
 * INSTRUCTIONS:
 * Make a guessing game where the computer guesses what the human user's
 * number is between 0 and 100 (inclusive). Do NOT use Arrays and do NOT use a linear search algorithm!
 * Use if-else and confirm("some question") inside the while-loop.
 * The human is expected to click the cancel button to indicate No (confirm function retuns false)
 * or the OK button to indicate Yes (confirm function returns true).
 * Do NOT change the line "guess = Math.round((min + max) / 2);"
 * because the computer is supposed to guess efficiently by
 * asking the human if their number is higher, lower, or equal to
 * the computer's current guess.
 * You can use "return" inside the while-loop to get the computer
 * to leave the guesser function.
 * For info on how while loops work see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * For info on how return works see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 */
const guesser = () => {
    let min = 0;
    let max = 100;
    let guess;

    alert("Think of a number betwwen 0 and 100");
    while (min <= max) {
		guess = Math.round((min + max) / 2);
		// Add your code below here ONLY!
    var firstGuess = confirm("Commencing binary search algorithms... is the number you thought of " + guess + "?");

    if (firstGuess) {
      // The guess is right. It's game over;
      alert("Yay, I got it!");
		  return;

      } else {
      // Range is adjusted depending on the user's response;
      var nextGuess = confirm("Give me a hint, please. If the number is lower, hit 'Cancel.' If the number is higher, hit 'OK.'");

      if (nextGuess) {
        // Min. value of the range increases;
        min = guess++;

      } else {
        // Max. value of the range increases;
        max = --guess;
    };
  };
	// Add your code above here ONLY!
	}

    alert("I could not guess your number. I think you are cheating!");
};

window.onload = guesser;
