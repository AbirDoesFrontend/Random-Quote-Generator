
/* ==================Random Quote Start================= */

/* API FUNCTION */
function quote(){
 fetch("https://api.kanye.rest/")
 .then(res => res.json())
 .then(data => displayQuote(data))
}

quote();

function displayQuote(randomQuote){
 document.getElementById("text").innerText = randomQuote.quote;
}

/* Generating A Quote */
document.getElementById("generate").onclick = quote;

/* ======================Random Quote End================ */ 




/* ================== ========== =============== =============== ============ */




/* =========================Random User Start============ */

function randomUser(){
 fetch("https://randomuser.me/api/?results=9")
  .then(res => res.json())
  .then(data => displayUser(data))
}

randomUser();


function displayUser(randomUser){
  let allUser = randomUser.results;
  let userCard = document.getElementById("userCard");

  for(let user of allUser){
    console.log(user);
    userCard.innerHTML += `
    <div class="col">
     <div class="card h-100">
       <img src="${user.picture.medium}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${user.name.first + " " +user.name.last}</h5>
         <p>Age: ${user.dob.age}</p>
         <p>Birth Place: ${user.location.country}</p>
         <p>Email: ${user.email}</p>
         <p>Cell: ${user.cell}</p>
         <p>Gender: ${user.gender}</p>
       </div>
     </div>
   </div>
    `
  }
}

/* =========================Random User End============== */

