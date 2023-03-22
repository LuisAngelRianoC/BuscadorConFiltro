function Busqueda() {
    $("#people").removeClass('hideRegister')
    $("#files").removeClass('hideRegister')
    $("#channels").removeClass('hideRegister')

  // Declare variables
  var input, filter, table, td, a, i, txtValue;

  input = document.getElementById('buscador');

  filter = input.value.toUpperCase();

  table = document.getElementById("peopleSection");
  td = table.getElementsByTagName("tr");

  console.log(td);

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < td.length; i++) {

    a = td[i].getElementsByClassName("registro")[0];
    
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      td[i].style.display = "";
    } else {
      td[i].style.display = "none";
    }
  }
  BusquedaFiles();
}
 
function BusquedaFiles() {
  // Declare variables
  var input, filter, table, td, a, i, txtValue;

  input = document.getElementById('buscador');

  filter = input.value.toUpperCase();

  table = document.getElementById("filesSection");
  td = table.getElementsByTagName("tr");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < td.length; i++) {

    a = td[i].getElementsByClassName("registro")[0];

    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      td[i].style.display = "";
    } else {
      td[i].style.display = "none";
    }
  }
  BusquedaChannels();
}
 

function BusquedaChannels() {
  // Declare variables
  var input, filter, table, td, a, i, txtValue;

  input = document.getElementById('buscador');

  filter = input.value.toUpperCase();

  table = document.getElementById("channelsSection");
  td = table.getElementsByTagName("tr");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < td.length; i++) {

    a = td[i].getElementsByClassName("registro")[0];

    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      td[i].style.display = "";
    } else {
      td[i].style.display = "none";
    }
  }
}