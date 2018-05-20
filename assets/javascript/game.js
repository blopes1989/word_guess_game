            var guesses = 0;
            var trysRemaining = 10;
            var wins = 0;
            var losses = 0;
            var newRound;
          var keyPress;
          var emptyArray = [];
          var lettersGuessed = [];
          var victory = "";
              var currentWins = document.getElementById("wins");
                  var currentLoss = document.getElementById("losses");
                  currentLoss.textContent = losses;
                  currentWins.textContent = wins;
              alert("Press OK to start!");
                  
                 
                  var wordBank = ["black", "blue", "green", "orange", "red", "yellow", "purple", "brown",];
                  newRound = wordBank[Math.floor(Math.random() * wordBank.length)];
                  for (i=0;i<newRound.length;i++){
                      emptyArray.push("-");
                  }
                  var guessLeft = document.getElementById("guess-left")
                  guessLeft.textContent = trysRemaining;
                  var lastGuess = document.getElementById("allGuesses");
                  var currentlyGuessing = document.getElementById("guessed");
                  currentlyGuessing.textContent = emptyArray.join(" ");

                  
                      document.onkeyup = function(event) {
                          keyPress = event.key.toLowerCase();
                          
                          if (newRound.indexOf(keyPress) > -1){
                              for (i=0;i<newRound.length;i++){
                                  if (keyPress == newRound[i]){
                                  emptyArray[i] = keyPress;
                                   }
                              }  
                              currentlyGuessing.textContent = emptyArray.join(" ");
                              victory = emptyArray.join("");
                            
                          } 
                          else if (lettersGuessed.includes(keyPress)==false && newRound.includes(keyPress) == false){
                          
                              lettersGuessed.push(keyPress);
                              lastGuess.textContent = lettersGuessed.join(" ");
                              trysRemaining--;
                              guessLeft.textContent = trysRemaining;
                          }
                          if (victory == newRound){
                              alert("Winner, Keep Going!");
                              trysRemaining = 10;
                              wins++
                              victory = "";
                              currentWins.textContent = wins;
                              guessLeft.textContent = trysRemaining;
                              emptyArray = [];
                              lettersGuessed = [];
                              newRound = wordBank[Math.floor(Math.random() * wordBank.length)];
                              for (i=0;i<newRound.length;i++){
                                   emptyArray.push("-");
                              } 
                              currentlyGuessing.textContent = emptyArray.join(" ");
                              lastGuess.textContent = "";
                                
                          }
                          
                          if(trysRemaining < 1){
                              alert("Sorry, try again.");
                              trysRemaining = 10;
                              losses++
                              victory = "";
                              currentLoss.textContent = losses;
                              guessLeft.textContent = trysRemaining;
                              emptyArray = [];
                              lettersGuessed = [];
                              newRound = wordBank[Math.floor(Math.random() * wordBank.length)];
                              for (i=0;i<newRound.length;i++){
                                   emptyArray.push("-");
                              } 
                              currentlyGuessing.textContent = emptyArray.join(" ");
                              lastGuess.textContent = lettersGuessed.join(" ");
                            
                          }
          }