const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkButton = document.querySelector("button"),
    remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);
chance = 10;

checkButton.addEventListener("click", () => {
    chance--;
    let inputValue = input.value;

    if(inputValue == randomNum) {
        [guess.textContent, checkButton.disabled] = ["Congratulations", true];
        [checkButton.textContent, guess.computedStyleMap.color] = ["Replay", "#333"];
        
    }
        else if(inputValue > randomNum && inputValue < 100) {
        [guess.textContent, remainChances.textContent] = ["Your guess is high" , chance];
        guess.computedStyleMap.color = "#333";
    } else if(inputValue < randomNum && inputValue > 0) {
        [guess.textContent, remainChances.textContent] = ["Your guess is low" , chance];
        guess.computedStyleMap.color = "#333";
    } else {
        [guess.textContent, remainChances.textContent] = ["Your guess is invalid" , chance];
        guess.computedStyleMap.color = "#333";
    }
})

console.log()