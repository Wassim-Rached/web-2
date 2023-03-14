let anne = 0;
do {
  annee = parseInt(prompt("Donner l'anne:", "2003"));
} while (anne < 0);

function bisextile(annee) {
  if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

let mois = 0;
do {
  mois = parseInt(prompt("Donner le mois:", "10"));
} while (mois > 12 || mois < 1);

switch (mois) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    write_table(anne, mois, 31);
    break;
  case 4:
  case 6:
  case 11:
    write_table(anne, mois, 30);
    break;
  case 2:
    {
      if (bisextile(annee)) {
        write_table(anne, mois, 28);
      } else {
        write_table(anne, mois, 29);
      }
    }
    break;
  default:
    alert(document.write("mois n'existe pas"));
}

function write_table(annee, mois, jour) {
  document.write(`
    <table>
    <tr>
        <td>anne</td>
        <td>${anne}</td>
    </tr>
    <tr>
        <td>mois</td>
        <td>${mois}</td>
    </tr>
    <tr>
        <td>jour</td>
        <td>${jour}</td>
    </tr>
    </table>
    `);
}
