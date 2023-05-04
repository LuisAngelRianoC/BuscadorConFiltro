let inputBuscador = document.getElementById('buscador');
let inputBuscadorval = document.getElementById('buscador').value;

inputBuscador.addEventListener('keyup', () => {

  Busqueda();
  showRegister();

})

function Busqueda() {
  var input, filter, table, tr, a, i, txtValue;
  input = document.getElementById('buscador');
  filter = input.value.toUpperCase();
  table = document.getElementById("peopleSection");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {

    a = tr[i].getElementsByClassName("registro")[0];
    txtValue = a.textContent || a.innerText;
    
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";

    } else {
      tr[i].style.display = "none";
    }
    
  }
  BusquedaFiles();
}
 
function BusquedaFiles() {
  var input, filter, table, tr, a, i, txtValue;
  input = document.getElementById('buscador');
  filter = input.value.toUpperCase();
  table = document.getElementById("filesSection");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {

    a = tr[i].getElementsByClassName("registro")[0];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
  BusquedaChannels();
}
 

function BusquedaChannels() {
  var input, filter, table, tr, a, i, txtValue;
  input = document.getElementById('buscador');
  filter = input.value.toUpperCase();
  table = document.getElementById("channelsSection");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {

    a = tr[i].getElementsByClassName("registro")[0];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
  
    }
  }
}
