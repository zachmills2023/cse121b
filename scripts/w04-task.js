/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Zachariah Mills", 
    photo: "images/sealing-profile.jpg", 
    favoriteFoods: [
        'Malaysian Curry', 'Durian','Banana','Dim Sum','Sushi',
    ],
    hobbies: [],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {place: 'Port Angeles, WA', length: '18 years'},
    {place: 'San Juan, PR', length: '1.5 years'},
    {place: 'Salt Lake City, UT', length: '0.5 years'},
    {place: 'Rexburg, ID', length: '2 years'}
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.push(
    'Playing Guitar',
    'Singing',
    'Cooking',
    'Hiking',
    'Kayaking',
    'Programming',
);

myProfile.hobbies.forEach(hobby => { 
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('d1');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});