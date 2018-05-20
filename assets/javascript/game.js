            var guesses = 0;
            var tryRemaining = 10;
            var wins = 0;
            var losses = 0;
            var newRound;
          var keyPress;
          var emptyArr = [];
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
                      emptyArr.push("-");
                  }
                  var guessLeft = document.getElementById("guess-left")
                  guessLeft.textContent = tryRemaining;
                  var lastGuess = document.getElementById("allGuesses");
                  var currentlyGuessing = document.getElementById("guessed");
                  currentlyGuessing.textContent = emptyArr.join(" ");

                  
                      document.onkeyup = function(event) {
                          keyPress = event.key.toLowerCase();
                          
                          if (newRound.indexOf(keyPress) > -1){
                              for (i=0;i<newRound.length;i++){
                                  if (keyPress == newRound[i]){
                                  emptyArr[i] = keyPress;
                                   }
                              }  
                              currentlyGuessing.textContent = emptyArr.join(" ");
                              victory = emptyArr.join("");
                            
                          } 
                          else if (lettersGuessed.includes(keyPress)==false && newRound.includes(keyPress) == false){
                          
                              lettersGuessed.push(keyPress);
                              lastGuess.textContent = lettersGuessed.join(" ");
                              tryRemaining--;
                              guessLeft.textContent = tryRemaining;
                          }
                          if (victory == newRound){
                              alert("Winner");
                              tryRemaining = 10;
                              wins++
                              victory = "";
                              currentWins.textContent = wins;
                              guessLeft.textContent = tryRemaining;
                              emptyArr = [];
                              lettersGuessed = [];
                              newRound = wordBank[Math.floor(Math.random() * wordBank.length)];
                              for (i=0;i<newRound.length;i++){
                                   emptyArr.push("-");
                              } 
                              currentlyGuessing.textContent = emptyArr.join(" ");
                              lastGuess.textContent = "";
                                
                          }
                          
                          if(tryRemaining < 1){
                              alert("Sorry, try again.");
                              tryRemaining = 10;
                              losses++
                              victory = "";
                              currentLoss.textContent = losses;
                              guessLeft.textContent = tryRemaining;
                              emptyArr = [];
                              lettersGuessed = [];
                              newRound = wordBank[Math.floor(Math.random() * wordBank.length)];
                              for (i=0;i<newRound.length;i++){
                                   emptyArr.push("-");
                              } 
                              currentlyGuessing.textContent = emptyArr.join(" ");
                              lastGuess.textContent = lettersGuessed.join(" ");
                            
                          }
          }