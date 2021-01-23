const myHeading = document.querySelector('h1');
myHeading.textContent = 'こんにちは!';
let myVariable = document.querySelector('h1');
alert('自己紹介!');
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'firefox-icon.png') {
      myImage.setAttribute ('src','kokusimusou.jpg');
    } else {

      myImage.setAttribute ('src','firefox-icon.png');
    }
}