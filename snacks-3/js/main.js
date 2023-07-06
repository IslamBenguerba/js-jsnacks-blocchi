const cardUno = document.getElementById('card-1')
const cardDue = document.getElementById('card-2')

const array1 = [1,3,4,5,8,7]
const array = [1,2]
for (i =0; i<array1.length; i++){
    if( array.length < array1.length){
        array.push(Math.floor(Math.random() * 10))
    }
}
cardUno.innerHTML = `<span>${array1}</span>`
cardDue.innerHTML = `<span>${array}</span>`