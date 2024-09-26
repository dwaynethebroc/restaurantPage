import "./styles.css"
import { generateHomepage, generateMenu, generateCareers } from "./home-page.js"

//create button elements and add event listeners
const homeButton = document.getElementById('home').addEventListener("click", generateHomepage);
const menuButton = document.getElementById('menu').addEventListener("click", generateMenu);
const careerButton = document.getElementById('careers').addEventListener("click", generateCareers);

generateHomepage();

console.log("Test")