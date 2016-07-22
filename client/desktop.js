'use strict';
imperio.listenerRoomSetup();

document.getElementById('code').innerHTML = `Mobile code: <span>${imperio.nonce}</span>`;

const elements = {};
const swipeExample = document.getElementById('swipe-example');
const cubeContainer = document.getElementById('cube-container');
const mainColor = 'white';
const activeColor = '#FEE123';
swipeExample.style.backgroundColor = mainColor;

imperio.swipeListener(handleSwipe);
function handleSwipe(event) {
  const multiplier = event.deltaX > 0 ? 1 : -1; //1 for left, -1 for right
  //magnitude estimates intensity of swipe on a 0-1 scale;
  const magnitude = multiplier * (5 * (Math.abs(event.velocityX) / 10) + 5 * (event.distance / 1000)) / 10;
  const skewString = `skewX(${-1 * magnitude * 80}deg)`;
  const xPosString = `translate(${magnitude * 750}px, 0px)`;
  const timing = 150 + 400 * Math.abs(magnitude);
  swipeExample.style.backgroundColor = activeColor;
  swipeExample.style.transition = `transform ${timing / 1000}s`;
  swipeExample.style.transform = `${skewString} ${xPosString}`;
  setTimeout(() => {
    swipeExample.style.transform = `skewX(0deg) translate(0px, 0px)`;
    swipeExample.style.backgroundColor = mainColor;
  }, timing);
}
