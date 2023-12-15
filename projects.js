document.getElementById('btn1').addEventListener('click', () => {
  showElement('proj1');
});
document.getElementById('btn2').addEventListener('click', () => {
  showElement('proj2');
});
document.getElementById('btn3').addEventListener('click', () => {
  showElement('proj3');
});
document.getElementById('btn4').addEventListener('click', () => {
  showElement('proj4');
});
document.getElementById('btn5').addEventListener('click', () => {
  showElement('proj5');
});
document.getElementById('btn6').addEventListener('click', () => {
  showElement('proj6');
});

function showElement(elementId) {
  const elements = document.querySelectorAll('.element');
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateX(-800px)';
  });

  const selectedElement = document.getElementById(elementId);
  selectedElement.style.opacity = '1';
  selectedElement.style.transform = 'translateX(0)';
}
