document.getElementById("copyLink").addEventListener("click", function() {
  var variableToCopy = "winechicken.dev@gmail.com";
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = variableToCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  alert("E-mail adress has been coppied to clipboard");
});

gsap.from("body", {
  opacity: 0,
  duration: 2,
  delay: .5,
})
gsap.from(".texti", {
  y: -250,
  opacity: 0,
  duration: 2.2,
  delay: 2,
})
gsap.from("#avatar", {
  y: -250,
  opacity: 0,
  duration: 2.5,
  delay: 2.2,
})
gsap.from(".linkes", {
  opacity: 0,
  duration: 1.5,
  delay: 3,
})
gsap.from(".contact", {
  opacity: 0,
  duration: 2,
  delay: 4.2,
})
gsap.from(".contactMe", {
  opacity: 0,
  duration: 2,
  delay: 4,
})