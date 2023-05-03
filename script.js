const myVideo = document.getElementById("myVideo");
const overlay = document.querySelector(".overlay");
const dialog = document.querySelector(".dialog");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

myVideo.addEventListener('ended', function() {
    overlay.style.display = "block";
});

yesButton.addEventListener('click', function() {
    window.location.href = "practice.html";
});

noButton.addEventListener('click', function() {
    overlay.style.display = "none";
});