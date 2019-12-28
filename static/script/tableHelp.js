function myFunction() {
  // Declare variables
  var input, filter, table, tr, tc, td, i, j, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("todays_games");
  tr = table.getElementsByTagName("tr");
  tc = table.getElementsByTagName("tc");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) { 
    for (j = 0; j < tc.length; j++) {
      td = tr[i].getElementsByTagName("td")[j];
      if (td) {
        txtValue = td.textContent || td.innerText;
      } else {
        txtValue = "";
      }
    }

    // Searched row, if found match to filter then hide row
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
