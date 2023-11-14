//generare 5 numeri casuali
//una volta generati far partire un timer di 30 secondi
//finito il timer scompaiono i 5 numeri 
//scrivere su un prompt i 5 numeri generati
//il sistema controlla se i numeri scritti sul prompt siano giusti

const numeri = getRandomNumbers(5, 1, 100)
console.log(numeri);


function getRandomNumbers(quanti, min, max) {
    let numeri = [];

    while (numeri.length < quanti){
        const nuovoNumero = getRndInteger(min, max);

        if (!numeri.includes(nuovoNumero)) {
            numeri.push(nuovoNumero)
        }
    }
    return numeri;
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }





//for (let i = 0; i < numeri.length; i++) {
 ////   const element = array[i];

//}
///setTimeout(myfunction, 30000);

//console.log("ciao");
//console.log("come va");

//function myfunction() {
   // console.log("eccomi");
//}