// Получаем значения a, b, X и информацию нажал ли пользователь из HTML
const a = parseInt(document.getElementById('a').innerText);
const b = parseInt(document.getElementById('b').innerText);
const X = parseInt(document.getElementById('X').innerText);
const node_verify = document.getElementById("verify")

// Функция для проверки, принадлежит ли число X промежутку [a, b]
function isInRange(X, a, b) {
    return X >= a && X <= b;
}

//По клику получаем результат с помощью этой функции
function click_click(){ 
    // Получаем элемент для вывода результата
    const resultElement = document.getElementById('result');

    // Проверяем и выводим результат
    if (isInRange(X, a, b)) {
        resultElement.innerText = `${X} принадлежит промежутку [${a}, ${b}]`;
    } else {
        resultElement.innerText = `${X} не принадлежит промежутку [${a}, ${b}]`;
    }
}
//Если пользователь нажал, то результат высветился
node_verify.addEventListener("click",click_click)