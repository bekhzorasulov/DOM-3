// 1 Misol
// const content = document.querySelector("#content");
// const paragraph = document.createElement("p");
// paragraph.textContent = "I am Bekhzod Rasulov";
// content.appendChild(paragraph);

// 2 Misol
// const changeText = document.querySelector("#changeText");
// const text = document.querySelector("#text");
// changeText.addEventListener("click", () => {
//   text.textContent = "This is a new text!";
// });

//  3 Misol
// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// const button3 = document.querySelector("#button3");
// const imageId = document.querySelector("#imageId");
// button1.addEventListener("click", () => {
//   imageId.src = `https://picsum.photos/id/${Math.ceil(
//     Math.random() * 300
//   )}/1000`;
// });
// button2.addEventListener("click", () => {
//   imageId.src = `https://picsum.photos/id/${Math.ceil(
//     Math.random() * 300
//   )}/1000`;
// });
// button3.addEventListener("click", () => {
//   imageId.src = `https://picsum.photos/id/${Math.ceil(
//     Math.random() * 300
//   )}/1000`;
// });

// 4 Misol
// const text = document.getElementById("styledText");
// const button = document.getElementById("styleButton");
// button.addEventListener("click", () => {
//   text.style.color = "red";
//   text.style.fontSize = "20px";
// });

// 5 Misol
// const button = document.querySelector("button");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");
// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = input.value;
//   ul.appendChild(li);
//   input.value = "";
// });

// 6 Misol
// const text = document.querySelector("#toggleText");
// const btn1 = document.querySelector("#toggleButton");
// const btn2 = document.querySelector("#toggleBtn");
// btn1.addEventListener("click", () => {
//   text.textContent = "";
// });
// btn2.addEventListener("click", () => {
//   text.textContent = "Yashiringan matn";
// });

// 8 Misol
// const time = document.querySelector("#clock");
// setInterval(() => {
//   clock.textContent = new Date().toLocaleTimeString();
// }, 1000);

//  9 Misol
// const buttonColor = document.querySelector("#colorButton");
// const colors = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
// ];
// const randomColor = () => {
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += colors[Math.trunc(Math.random() * colors.length)];
//   }
//   return color;
// };
// buttonColor.addEventListener("click", () => {
//   document.body.style.backgroundColor = randomColor();
// });

//  10 Misol
// const input = document.querySelector("#taskInput");
// const addTask = document.querySelector("#addTask");
// const ul = document.querySelector("#taskList");
// addTask.addEventListener("click", () => {
//   const li = document.createElement("li");
//   const button = document.createElement("button");
//   button.textContent = input.value;
//   button.classList.add("todo-list");

//   li.appendChild(button);
//   ul.appendChild(li);
//   input.value = "";
// });

// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("todo-list")) {
//     const buttonStyle = getComputedStyle(e.target).textDecoration;
//     console.log(buttonStyle);
//     buttonStyle.includes(`line-through`)
//       ? (e.target.style.textDecoration = "none")
//       : (e.target.style = `text-decoration: line-through;`);
//   }
// });
