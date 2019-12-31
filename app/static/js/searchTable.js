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
