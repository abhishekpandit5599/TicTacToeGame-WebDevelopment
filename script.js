console.log('Welcome to Tic Tac Toe')
let audioGameOver = new Audio('Wah Bete.mp3');
let clickAudio = new Audio('pop-1.mp3');

let turn ='X'

// Function to change the turn
const changeTurn = ()=>{
    return turn ==='X'?'0':'X'
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText ) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText ) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText ='Player '+boxtext[e[0]].innerText +' Won'
            gameOver = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ='200px'
            audioGameOver.play();
        }
    })
}

// Game Logic
gameOver = false
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            clickAudio.play();
            checkWin();
            if (!gameOver){
                document.getElementsByClassName('info')[0].innerText = 'Turn for : '+turn;
            }
        }
    })
})

// Reset function
reset.addEventListener('click',(e)=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ''
    });
    turn ='X';
    document.getElementsByClassName('info')[0].innerText = 'Turn for : '+turn;
    gameOver=false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ='0'
    audioGameOver.pause();
})