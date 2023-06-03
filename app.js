/* selectors */
let counter_num = document.querySelector(".counter_num");
let counter_dec = document.querySelector(".counter_dec");
let counter_reset = document.querySelector(".counter_reset");
let counter_inc = document.querySelector(".counter_inc");

var count = 0;

/* display initial count value */
counter_num.innerHTML = count;

/* function to decrease number */
const performDecrease = () => {
    count--;
    counter_num.innerHTML = count;
}

/* function to increase number */
const performIncrease = () => {
    count++;
    counter_num.innerHTML = count;
}

/* function to reset number */
const performReset = () => {
    count = 0;
    counter_num.innerHTML = count;
}

/* adding click events for buttons */
counter_dec.addEventListener("click", performDecrease);
counter_inc.addEventListener("click", performIncrease);
counter_reset.addEventListener("click", performReset);
