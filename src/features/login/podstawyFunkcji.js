const dodawanie = (skladnik1, skladnik2) => {
  return skladnik1 + skladnik2;
}

function nicNieRobiacaFunkcja() {
  const innaZmienna = 6;
  innaZmienna = 7;
}

let zmienna = dodawanie(2, 3);

zmienna = 12;
zmienna = "dupa";



console.log(zmienna);

function mnozenie(skladnik3, skladnik4) {
  return skladnik3 * skladnik4;

}
let zmienna2 = mnozenie(4, 5);
console.log(zmienna2);

//   function login($login, $haslo) {
//     $conn = new mysqli("localhost", "root", "", "baza");
//     if ($conn->connect_error) {
//       die("Connection failed: " . $conn->connect_error);
//     }
//     $sql = "SELECT * FROM uzytkownicy WHERE login='$login' AND haslo='$haslo'";
//     $result = $conn->query($sql);
//     if ($result->num_rows > 0) {
//       return true;
//   } else {
//       return false;
//   }
//   $conn->close();
// }