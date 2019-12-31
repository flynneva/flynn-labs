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

function searchTable() {
  // Declare variables
  var input, filter, table, tr, th, td, i, tmpTxt, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("todays_games");
  tr = table.getElementsByTagName("tr");
  th = table.getElementsByTagName("th");
  txtValue = '';
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < (tr.length - 1); i++) {
    for (j = 0; j < (th.length - 1); j++) {
      td = tr[i].getElementsByTagName("td")[j];
      if (filter != '' && td) {
        tmpTxt = td.textContent || td.innerText;
        txtValue = txtValue.concat(tmpTxt);
      }
    }
    // Searched row, if found match to filter then hide row 
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
    txtValue = '';
  }
}
