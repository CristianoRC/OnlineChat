const loginSotorageKey = "login";


$('#btn-login').on( 'click', () => {
  const name = $('#login').val();
  const imageUrl = $('#imageUrl').val();

  this.setLoginData(name, imageUrl);
  this.redirectToHomePage();
})

function setLoginData(name, imageUrl) {
  localStorage.setItem(loginSotorageKey, JSON.stringify({name, imageUrl}));
}


function removeLoginInfo() {
  localStorage.removeItem(loginSotorageKey);
}

function userHasLoginInfo() {
   return localStorage.getItem(loginSotorageKey) !== null;
}

function getUserData() {
  return JSON.parse(localStorage.getItem(loginSotorageKey));
}

function redirectToHomePage() {
  window.location.href = "../index.html";

}