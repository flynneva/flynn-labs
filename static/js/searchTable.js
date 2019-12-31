function searchTable() {
  // Declare variables
  var input, filter, table, tr, th, td, i, txtValue, txtValue2, txtValue3;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("todays_games");
  tr = table.getElementsByTagName("tr");
  th = table.getElementsByTagName("th");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < (tr.length); i++) {
    for (j = 0; j < (th.length); j++) {
      td = tr[i].getElementsByTagName("td")[j];
      if (filter != '' && td && td2) {
        txtValue += td.textContent || td.innerText;
      }
    }
    console.log(txtValue) 
    // Searched row, if found match to filter then hide row 
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
