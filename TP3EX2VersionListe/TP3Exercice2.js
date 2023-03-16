//   txtres.style.width = (10 * tab_len).toString() + "px";
tab = new Array();

//ou bien let tab =[];

//rest values
function init() {
  set_label("");
  set_result("");
  if (document.f1.lstop.selectedIndex != 4) {
    document.f1.txtnotApp.disabled = true;
  }
  console.log("cleared");
}

//show result
function affiche() {
  set_label(tab);
  set_result(tab);
}

//enter students number and genrate their grades
function saisir() {
  init();
  const N = document.f1.txtN.value;
  tab = [];
  for (let index = 0; index < N; index++) {
    // generate the random number between 0 and 20
    let num = Math.random() * 20;
    num = Math.round(num * 100) / 100;
    //add it to the list
    tab.push(num);
  }
  //show the list
  affiche();
}

function admis() {
  //count students with more or equal to 10
  const admis_count = tab.reduce((counter, value_x) => {
    if (value_x >= 10) {
      return counter + 1;
    } else {
      return counter;
    }
  }, 0);
  //set the result
  set_result(admis_count);
}

function moyenne(N) {
  //calculate average
  const avrg = tab.reduce((a, b) => a + b, 0) / tab.length;
  //set the result
  set_result(avrg);
}

function Max(N) {
  //calculate max value
  const max_value = Math.max(...tab);
  //set the result
  set_result(max_value);
}

function recherche() {
  document.f1.txtnotApp.disabled = false;
  //setup lookup variable
  const lookup_value = document.f1.txtnotApp.value;
  //search for certain value
  const search_result = tab.reduce((counter, value_x) => {
    if (value_x == lookup_value) {
      return counter + 1;
    } else {
      return counter;
    }
  }, 0);
  //set the result
  set_result(search_result);
}

function choix() {
  const index = document.f1.lstop.selectedIndex;
  document.f1.txtnotApp.disabled = true;
  switch (index) {
    //Afficher la liste des notes
    case 0:
      console.log(0);
      affiche();
      break;

    //Nombres d'étudiants Admis
    case 1:
      admis();
      console.log(1);
      break;

    //Moyenne de la Classe
    case 2:
      moyenne();
      console.log(2);
      break;

    //Max des notes
    case 3:
      Max();
      console.log(3);
      break;

    //Nombres apparition d'une note
    case 4:
      recherche();
      console.log(4);
      break;

    //throw error
    default:
      alert("somthing went wrong!");
      break;
  }
}

//
function set_result(x) {
  document.f1.txtres.value = x;
}

//
function set_label(x) {
  document.getElementById("lblTab").innerText = x;
}
