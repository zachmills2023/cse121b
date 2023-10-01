/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Zach Mills";
let today = new Date();
let currentYear = today.getFullYear();
let profilePicture = 'images/sealing-profile.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of Zach and Charise');

/* Step 5 - Array */
let favFoods = [];
let favFood = 'Rice';
favFoods.push('Rice', ' Bao', ' Banana ', ' Sushi');
console.log(favFoods);

let newFavFood = ' Durian';
favFoods.push(newFavFood);
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;