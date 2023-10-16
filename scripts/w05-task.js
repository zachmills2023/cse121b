/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
   temples.forEach(temple => {
     // Create an HTML article element.
     let article = document.createElement('article');

     // Create an h3 element; add the temple's templeName property to the element.
     let h3 = document.createElement('h3');
     h3.textContent = temple.templeName;
     article.appendChild(h3);

     // Create an HTML img element and add the temple's image Url properety to 
     // the src attribute and the location property to the alt attribute.
     let img = document.createElement('img');
     img.src = temple.imageUrl;
     img.alt = temple.location;
     article.appendChild(img);

     // Append the article element to the global templesElement variable.
     templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch() */
const getTemples = async () => {
   const response = await
   fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

   // Convert the fetch response into a json.
   const templeList = await response.json();
   
   // Call the displayTemples function with the list of temples.
   displayTemples(templeList);
};

/* reset Function */


/* sortBy Function */



getTemples();
console.log(templeList);

/* Event Listener */
