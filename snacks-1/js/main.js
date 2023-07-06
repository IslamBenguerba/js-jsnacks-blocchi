const listaNomi = ['marco','francesco','elena','giorgia','lucrezia','davide'];
const ListaCognomi = ['rossi','bosch','jordan','parenzo','cruciani','barisoni']
let listaCasuale = []
let indice = listaNomi.length
// in questo metodo non abbiamo controllo se un nome o cognome è già stato utilizzato
const btnCreate = document.getElementById('create')
btnCreate.addEventListener("click",crea)
const btnRemove = document.getElementById('remove')
const card = document.getElementById('lista')
function crea(){
    for (i = 0; i < indice; i++){
    let indiceCasuale =  Math.floor(Math.random() * indice);
    let indiceCasualeSeconda = Math.floor(Math.random() * indice);
    let nomeCasuale = listaNomi[indiceCasuale]
    let cognomeCasuale = ListaCognomi[indiceCasualeSeconda]
    listaCasuale.push(`${nomeCasuale} ${cognomeCasuale}`)
    
    }
    
    card.append(listaCasuale)
    btnRemove.addEventListener("click",rimuovi)
    function rimuovi(){
    card.remove(listaCasuale)
}
}


