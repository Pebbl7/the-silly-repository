let currentNum = 1
let iter = 0
let things = 1

function isOdd(x) {
    return (x % 2 == 1);
}

function whooobabythatswhatimtalkinabout() {
    if (isOdd(currentNum) == true) {
        currentNum = currentNum * 3;
        currentNum++;
        iter++;
    } else {
        currentNum = currentNum / 2;
        iter++;
    }
    console.log("total | " + things + " | iteration | " + iter + " | number | " + currentNum + " |");
    if (currentNum == 1) {
        things++;
        iter = 0;
        currentNum = things;
    }
}
setInterval(whooobabythatswhatimtalkinabout, 1);