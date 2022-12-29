let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#equal');

// Calculator Display
let realTimeScreenValue = []

// To Clear

clearbtn.addEventListener("click", (e) => {
    // console.log("event click",e);

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// Get value of any button clicked and display to the screen

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {
        
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {

            // To display value on btn press
            realTimeScreenValue.push(btn.value)

            // currentInput.innerHTML = realTimeScreenValue.join('');
            document.getElementById('input').value = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerText = eval(realTimeScreenValue.join(''));
            }

        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('equal')) {

            currentInput.className = 'currentInput';
            answerScreen.className = 'answerScreen';
            document.getElementById('result').value = eval(realTimeScreenValue.join(''));

            answerScreen.style.color = "black";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})


 