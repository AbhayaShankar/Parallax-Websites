let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let text = document.getElementById("text");
let mountains_behind = document.getElementById("mountains_behind");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");

window.addEventListener("scroll", function () {
  let value = this.window.scrollY;
  stars.style.left = value * 0.4 + "px";
  moon.style.top = value * 0.5 + "px";
  mountains_behind.style.top = value * 0.3 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.2 + "px";
  btn.style.marginTop = value * 1.2 + "px";
});
