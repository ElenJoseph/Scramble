/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

/**
 * help()
 * Displays the game instructions.
 * @Return: String
 */

function help () {
  return `Welcome to Scramble. 
The game where you unscramble letters to make words.

Once you start the game, you will be given a scrambled word.
If you correctly guess the word, you will receive a point.
If you guess incorrectly you will receive a strike.
You can also pass on a word. 

To start a new game use start().
To make guess use guess('word').
To skip a word use pass().
To show these instructions again use help().`
}

// Displays the instructions when the page loads.
console.log(help())

/**********************************************
 * YOUR CODE BELOW
 **********************************************/

 /**
  * An arrey of words, must have at least 10
  */
 /**
  * an object that will keep of the game status
  * - active: boolean value
  * - words: array(shuffled)
  * - word: string
  * - scrambleld: string (shuffled)
  * - strikes: number
  * - poits: number
  * - maxStrikes: number
  * - passes: number
  * - maxPasses: number
  */

  const words = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua',
    'Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan'
    ]

const gameStatus = {
  active: false,
  words: [],
  word: '',
  scrambleld: '',
  strikes: 0,
  poits: 0,
  maxStrikes: 2,
  passes: 0,
  maxPasses: 2,
}
  /**
   * The start()Function
   * Check if there is not an active game
   *  Set game to active(true)
   *  Set strikes to 0
   *  Set poits to 0
   *  Set passes to start number
   *  Use Shuflfe function to get shuffled arrey and store in game list of words
   *  Use shift function to get first word and store in game words
   *  Use shuffle function to get shuffled scrambled word and store in game scrambeld
   *  Response: scrambled word
   * else 
   * response: there is an active game
   * 
   */
function start (){
  if (gameStatus.active === false) {
     gameStatus.active = true
     gameStatus.maxStrikes = 2
     gameStatus.strikes = 2
     gameStatus.poits = 0
     gameStatus.passes = 2
     gameStatus.words = shuffle(gameStatus.words)
     gameStatus.word = words.shift()
     gameStatus.scrambleld = shuffle(gameStatus.word)
     console.log(` guess the name of this country
     : ${gameStatus.scrambleld}`)

  } else { 
    console.log ("there is an active game, finish the active game first!")
  }
}
console.log(shuffle(words[0]));

//console.log(shift(words('')))
  /**
* Create a guess() function that will be used by the player to guess the word and will do the following:
* Check to see if the guessed word matches the current word unscrambled.
* Case should NOT matter.
* If the words do match the player will receive a point. The word should be removed from the game list (the same word should not appear twice) and the next word should be displayed.
* If the words do NOT match the player will receive a strike and the current word will be displayed again.
* The player should NOT be able to make guesses if there is no active game.
* 
*/
function guess (guessed){
  if(gameStatus.active == true) {

     if(guessed == gameStatus.word){
        console.log(`You got it! ${gameStatus.word}`)
        gameStatus.poits = gameStatus.poits +1
       }
       if(game.words.length > 0){
         console.log(`You got 1 point! Your score is: ${gameStatus.poits}`) 
         nextWord()
       }else{
         console.log(`You just finished! Now your score is: ${gameStatus.poits}`)
         gameStatus.active = false
       }
       } else { 
           if (gameStatus.strikes < gameStatus.maxStrikes )
              console.log(`You're wrong,try again this county: ${gameStatus.scrambleld}`)
             gameStatus.strikes = gameStatus.strikes +1

    function nextWord(){
      gameStatus.word = gameStatus.words.shift()
      gameStatus.scrambledWord = shuffle(gameStatus.word)
      console.log(`The next scrambled word is: ${gameStatus.scrambledWord}`)
    }

/**
* Create a pass() function that will be used by the player to skip a word and will do the following:
* Check if player has any passes left
* Remove the from the game list (the same word should not appear twice) and the next word should be displayed.
* The player should NOT receive a point for passing.
* 
*  
*/

function pass() {
  if(gameStatus.active){
    if(gameStatus.passes > 0){
      gameStatus.passes--
      if(gameStatus.words.length > 0){
        console.log(`You passed! Try again. you only have ${gameStatus.passes} more pass(es).`)
        nextWord()
      }else{
        console.log(`You finished! your final score is: ${game.points}`)
        gameStatus.active = false
      }
    }else{
      console.log(`You have reached the maximum number of passes. Please try again.`)
    }
  }else{
    console.log("There is NO active game!... should be one before start passing. Please strat a new game.")
  }
}
       }
 /**
  

* The player should NOT be able to pass if there is no active game.
*/

/**

* The game will end if there are no more words in the list OR the player has received the maximum number of strikes
*/

/**
*When the game ends the player total points should be displayed. 
*/

/**
* After the game ends the player should be able to start a new game using the start() function.
*
*
**/ 
