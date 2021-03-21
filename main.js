let p = document.getElementById('text');
let textlists = [
  'Hello World!',
  'JavaScript',
  'Webmania',
  'This is my app',
  'How are you?',
];

let checkTexts = [];

createText();

function createText() {
  let rnd = Math.trunc(Math.random() * textlists.length); //ES2015

  p.textContent = '';
  checkTexts = textlists[rnd].split('').map(function (value) {
    let span = document.createElement('span');

    span.textContent = value;
    p.appendChild(span);

    return span;
  });
}
//console.log(checkTexts);

//p.textContent = textlists[0];   ここのpタグは上記p.appendChildに入るので不要
//console.log(p.textContent);

document.addEventListener('keydown', keyDown);

function keyDown(e) {
  //console.log(e.key);
  if (e.key === checkTexts[0].textContent) {
    checkTexts[0].className = 'add-blue';

    checkTexts.shift();

    if (!checkTexts.length) createText();
  }
}
