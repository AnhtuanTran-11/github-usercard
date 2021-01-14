import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// Fetches data from endpoint and uses dot notation to insert res.data into the component
axios.get("https://api.github.com/users/AnhtuanTran-11")
.then(res => {
  cardMaker(res.data);
  console.log('This is the response', res);
})
.catch(err => {
  debugger;
  console.log('This is if there was an error', err);
});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// Fetches data from endpoint using a for loop to loop through the followersArray;
const followersArray = ["tetondan","dustinmyers","justsml","luishrd","bigknell"];
for (let i = 0; i < followersArray.length; i++) {
  let userName = followersArray[i];
  axios.get(`https://api.github.com/users/${userName}`)
.then(res => {
  cardMaker(res.data);
  console.log('This is the response', res);
})
.catch(err => {
  debugger;
  console.log('This is if there was an error', err);
});


}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(data) {
  // Creates elements
  const cardDiv = document.createElement("div");
  const imgSrc = document.createElement("img");
  const cardInfoDiv = document.createElement("div");
  const h3Name = document.createElement("h3");
  const pUserName = document.createElement("p");
  const pLocation = document.createElement("p");
  const pProfile = document.createElement("p");
  const aHref = document.createElement("a");
  const pFollowers = document.createElement("p");
  const pFollowing = document.createElement("p");
  const pBio = document.createElement("p");

  // Attaches text to the elements
  h3Name.textContent = data.name;
  pUserName.textContent = data.login;
  pLocation.textContent = `Location: ${data.location}`;
  aHref.textContent = data.url;
  pProfile.textContent = 'Profile:';
  pFollowers.textContent = `Followers: ${data.followers}`;
  pFollowing.textContent = `Following: ${data.following}`;
  pBio.textContent = `Bio: ${data.bio}`;

  // Adds classes and attributes to elements
  cardDiv.classList.add("card");
  cardInfoDiv.classList.add("card-info");
  imgSrc.setAttribute('src', data.avatar_url);
  aHref.setAttribute('href', data.html_url);
  h3Name.classList.add("name");
  pUserName.classList.add("username");
  
  // Appends the elements to the div
  cardDiv.appendChild(imgSrc);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(h3Name);
  cardInfoDiv.appendChild(pUserName);
  cardInfoDiv.appendChild(pLocation);
  cardInfoDiv.appendChild(pProfile);
  pProfile.appendChild(aHref);
  cardInfoDiv.appendChild(pFollowers);
  cardInfoDiv.appendChild(pFollowing);
  cardInfoDiv.appendChild(pBio);

  // Selects an entry point for the content
  document.querySelector(".cards").append(cardDiv);

  return cardDiv;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
