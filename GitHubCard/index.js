/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//EXPERIMENT ON BOTTOM IF HAVE TIME LATER
// .then((response)=>{
//   let myInfo = Object.entries(response.data),
//         Me = myInfo.map((value)=>{
//           return Me[3],Me[18],Me[0],Me[21],Me[5]
          
//         })


const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/NickAlicaya')
.then((response)=>{
  const newCard =createCard(response.data)
  cards.appendChild(newCard);
  console.log(response)
   })

.catch((error)=>{
  console.log('Error Detected', error);
})
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

function createCard(data){
    
  // elements
  const card = document.createElement('div');
  const cardData = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardName = document.createElement('h3');
  const cardLogin = document.createElement('p');
  const cardUrl = document.createElement('a');
  const cardLocation = document.createElement('p');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');

  //classes
  card.classList.add('card');
  cardImg.classList.add('img');
  cardName.classList.add('name');
  cardLogin.classList.add('username');

  //structure
  card.appendChild(cardImg)
  card.appendChild(cardData)
  cardData.appendChild(cardName);
  cardData.appendChild(cardLogin);
  // cardData.appendChild(cardUrl);
  cardData.appendChild(cardLocation);
  cardData.appendChild(cardFollowers);
  cardData.appendChild(cardFollowing);
  cardData.appendChild(cardBio);
  
  // content
  cardImg.src=data.avatar_url;
  cardName.textContent=data.name;
  cardLogin.textContent=data.login;
  // cardUrl.href=data.url;
  // cardUrl.innerText='profile'
  cardLocation.textContent=`Location: ${data.location}`;
  cardFollowers.textContent=`Followers: ${data.followers}`;
  cardFollowing.textContent=`Following: ${data.following}`;
  cardBio.textContent=`Bio: ${data.bio}`;

return card
}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['squashgray','vtellez1','toddmurphy','bseverino','phil-mac'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
