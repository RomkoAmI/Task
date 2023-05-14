let images = document.getElementsByTagName('img');

let currentTime = new Date();
let formattedDate = currentTime.toLocaleString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
});
 
let output1 = formattedDate;
let output2 = 'Кількість картинок: ' + images.length; 

let header1 = document.createElement('h1');
header1.innerHTML = output1;
let header2 = document.createElement('h1');
header2.innerHTML = output2;
document.body.insertBefore(header2, document.body.firstChild);
document.body.insertBefore(header1, document.body.firstChild);