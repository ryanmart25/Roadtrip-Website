function resize_text() {
  let text_box_id = document.getElementById("text");
  text_box_id.style.fontSize = "24pt";
}
function fancify() {
  let text_box = document.getElementById("text");
  text_box.style.fontWeight = "bold";
  text_box.style.textDecoration = "underline";
  text_box.style.color = "blue";
}
function reset_text() {
  let text_box = document.getElementById("text");
  text_box.style.fontWeight = "normal";
  text_box.style.fontSize = "12pt";
  text_box.style.textDecoration = "none";
  text_box.style.color = "black";
}
function show_alert() {
  alert("Hello World!");
}
function moo_button() {
  let text_box = document.getElementById("text");
  let text = text_box.value;
  let split = text.split(".");
  let str = split.join("-Moo");
  text_box.value = str;
}
