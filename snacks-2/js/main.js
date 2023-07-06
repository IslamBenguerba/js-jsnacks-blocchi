const listaNumeri = [1,2,3,4,5,6,7,4,8]
const listaNumeriDispari =[]
const card = document.getElementById('card')
for (i =0; i< listaNumeri.length; i++){
    if( i% 2 == 1){
        console.log( listaNumeri[i])
        listaNumeriDispari.push(listaNumeri[i])
    }
}
console.log(`i dispari ${listaNumeriDispari}`)
let somma = 0
for ( i = 0; i< listaNumeriDispari.length; i++){
    somma += listaNumeriDispari[1]
}
card.innerHTML = `<span>i numeri sono ${listaNumeri}</span>`
card.innerHTML += `<span>i numeri dispari sono ${listaNumeriDispari}</span>`
card.innerHTML += `<span> la loro somma è ${somma}</span>`
console.log(somma)