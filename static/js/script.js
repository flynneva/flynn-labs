function addToken(token) {
        document.cookie = "token=" + token;
}

function userState(user) {
    if (user) {
      document.getElementById('sign-out').hidden = false;
      document.getElementById('login-info').hidden = false;
      console.log(`Signed in as ${user.displayName} (${user.email})`);
      user.getIdToken().then(addToken(token));
    } else {
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        tosUrl: '<your-tos-url>'
      };
      ui.start('#firebaseui-auth-container', uiConfig);
      document.getElementById('sign-out').hidden = true;
      document.getElementById('login-info').hidden = true;
      document.cookie = "token=";
    }
} 

function logInError(error) {
    console.log(error);
    alert('Unable to log in: ' + error)
}

function fBaseSignOut() {
  firebase.auth().signOut();
}

function signOutHandler() {
  var elem = document.getElementById('sign-out');
  if (typeof elem != 'undefined' && elem !== null) {
    elem.onclick = fBaseSignOut();

    firebase.auth().onAuthStateChanged( userState );
  }
}

window.addEventListener('load', signOutHandler()); 
