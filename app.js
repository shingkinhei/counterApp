let digit = 0;
let counter = document.querySelector(".counter");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
decrease.addEventListener("click", function () {
    if(counter.innerHTML>0){
        digit--;
    }else{
        alert("Too small");
    }
    counter.innerHTML = digit;
});
increase.addEventListener("click", function () {
    if(counter.innerHTML<50){
        digit++;
    }else{
        alert("Too large");
    }
    counter.innerHTML = digit;
});
reset.addEventListener("click", function () {
    digit = 0;
    counter.innerHTML = digit;
});
