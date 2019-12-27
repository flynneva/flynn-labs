function addToken(token) {
        // Add the token to the browser's cookies. The server will then be
        // able to verify the token against the API.
        // SECURITY NOTE: As cookies can easily be modified, only put the
        // token (which is verified server-side) in a cookie; do not add other
        // user information.
        document.cookie = "token=" + token;
}

function userState(user) {
    if (user) {
      // User is signed in, so display the "sign out" button and login info.
      document.getElementById('sign-out').hidden = false;
      document.getElementById('login-info').hidden = false;
      console.log(`Signed in as ${user.displayName} (${user.email})`);
      user.getIdToken().then(addToken(token));
    } else {
      // User is signed out.
      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          // Remove any lines corresponding to providers you did not check in
          // the Firebase console.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };
      // Show the Firebase login button.
      ui.start('#firebaseui-auth-container', uiConfig);
      // Update the login state indicators.
      document.getElementById('sign-out').hidden = true;
      document.getElementById('login-info').hidden = true;
      // Clear the token cookie.
      document.cookie = "token=";
    }
} 

function logInError(error) {
    console.log(error);
    alert('Unable to log in: ' + error)
}

function signOutHandler() {
  document.getElementById('sign-out').onclick = fbaseSignOut();
  
  firebase.auth().onAuthStateChanged( userState );
}

function fBaseSignOut() {
  firebase.auth().signOut();
}

window.addEventListener('load', signOutHandler()); 
