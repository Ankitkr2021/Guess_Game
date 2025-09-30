const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkButton = document.querySelector("button"),
    remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random * 100);
console.log(inputValue);
chance = 10;

checkButton.addEventListener("click", () => {
    chance--;
    let inputValue = input.value;

    if(inputValue == randomNum) {
        [guess.textContent, checkButton.disabled] = ["Congratulations", true];
        [checkButton.textContent, guess.computedStyleMap.color] = ["Replay", "#333"];
    }
})

console.log()