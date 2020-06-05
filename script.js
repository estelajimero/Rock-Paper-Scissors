
    const words = ['Rock', 'Paper', 'Scissors'];  
    
    //Random word function
    function computerPlay() {
        let randomWord = words[Math.floor(Math.random() * words.length)];
        
        return randomWord;
    }

    //Results messages
    function playRound(playerSelection, computerSelection) {
        let player = playerSelection.toLowerCase();
        let computer = computerSelection.toLowerCase();

        let result = '';

        if (player == 'rock') {
            if (computer == 'rock') {
                result = "You Draw! Rock draws Rock";
            } 

            if (computer == 'paper') {
                result = "You Lose! Paper beats Rock";
            }

            if (computer == 'scissors') {
                result = "You Win! Rock beats Scissors";
            }
        }

        if (player == 'paper') {
            if (computer == 'rock') {
                result = "You Win! Paper beats Rock";
            }

            if (computer == 'paper') {
                result = "You Draw! Paper draws Paper";
            }

            if (computer == 'scissors') {
                result = "You Lose! Scissors beats Paper";
            }
        }

        if (player == 'scissors') {
            if (computer == 'rock') {
                result = "You Lose! Rock beats Scissors";
            }

            if (computer == 'paper') {
                result = "You Win! Scissors beats Paper";
            }

            if (computer == 'scissors') {
                result = "You Draw! Scissors draws Scissors";
            }
        }

        let humanScore = document.querySelector('.points-human');
        let computerScore = document.querySelector('.points-computer');

        if (result.indexOf('Win') > 0) {
             humanScore.innerHTML++;
        } else if (result.indexOf('Lose') > 0) {
            computerScore.innerHTML++;
        }

        let scoreText = document.querySelector('.round-text');

        scoreText.innerHTML = 'Ronda ' + (Number(scoreText.innerHTML.substr(6, 1)) + 1) + ' de 5';

        if (Number(scoreText.innerHTML.substr(6,1)) == 5) {
            alert('Game over');
            humanScore.innerHTML = 0;
            computerScore.innerHTML = 0;
            scoreText.innerHTML = 'Ronda 1 de 5';
        }
    }

    // Buttons click
    const rock = document.querySelector('.rock');
    rock.addEventListener('click', function() { playRound('rock', computerPlay())});

    const paper = document.querySelector('.paper');
    paper.addEventListener('click', function() { playRound('paper', computerPlay())});

    const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', function() { playRound('scissors', computerPlay())});
