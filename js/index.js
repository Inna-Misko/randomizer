var refs = {
    minNumberRef: document.getElementById('minNumber'),
    maxNumberRef: document.getElementById('maxNumber'),
    generateBtnRef: document.getElementById('generateBtn'),
    textSpanRef: document.getElementById('textSpan'),
    resetBtnRef: document.getElementById('resetBtn')
};



refs.generateBtnRef.addEventListener('click', function getRandomNumber(e) {
    e.preventDefault()

var minNumber = refs.minNumberRef.value
var maxNumber = refs.maxNumberRef.value
var arr = getArrayOfNumbers(minNumber, maxNumber)

    while (arr.length > 0) {

        var randomNum = arr[Math.floor(Math.random() * arr.length)];
        var indx = arr.indexOf(randomNum)
        refs.textSpanRef.textContent = randomNum
        if (arr.includes(indx)) {
            
            console.log(arr)
        }
   }
 
});

var arrOfNumbers = [];

function getArrayOfNumbers(min, max) {
    for (var i = min; i <= max; i++) {
arrOfNumbers.push(i)
    }
    return arrOfNumbers
}



function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
