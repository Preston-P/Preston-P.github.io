let firestore = firebase.firestore();

const submitButton = document.querySelector("#submit");
let userName = document.querySelector("#UserName");
let userEmail = document.querySelector("#UserEmail");
let userMessage = document.querySelector("#UserMessage");

const db = firestore.collection("users");

console.log(userMessage);

submitButton.addEventListener("click", function() {
  let userNameInput = userName.value;
  let emailInput = userEmail.value;
  let userMessageInput = userMessage.value;

  db.doc()
    .set({
      name: userNameInput,
      email: emailInput,
      message: userMessageInput
    })
    .then(function() {
      console.log("Data Saved");
    })
    .catch(function(error) {
      console.log(error);
    });
});
