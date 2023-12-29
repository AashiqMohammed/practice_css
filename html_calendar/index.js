const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dateName = document.getElementById("date-name");
const yearName = document.getElementById("year-name");

const date = new Date();

monthName.innerText = date.toLocaleString("default", { month: "long" });
dayName.innerText = date.toLocaleString("default", { weekday: "long" });
dateName.innerText = date.getDate();
yearName.innerText = date.getFullYear();
