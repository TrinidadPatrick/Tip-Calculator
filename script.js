const bill = document.getElementById("bill")
const people = document.getElementById("people")

const reset = document.getElementById("reset")

const tipPerPerson = document.getElementById("tipPerPerson")
const totalPerPerson = document.getElementById("totalPerPerson")

const errorMessage1 = document.getElementById("errorMessage1")
const errorMessage2 = document.getElementById("errorMessage2")

let inputBill = 0
let inputPeople = 0
let tip = 0

let total = 0

bill.addEventListener('keypress', (e)=>{
    if(e.key === "Enter"){
        setPeople()
        setBill()
        compute()
    }
})

people.addEventListener('keypress', (e)=>{
    if(e.key === "Enter"){
        setPeople()
        setBill()
        compute()
    }
})



const setBill = () =>{
    inputBill = Number(bill.value)
}

const setPeople = () =>{
    inputPeople = Number(people.value)
}

const setTip = (ele) =>{
    tip = Number(ele.value)
}

const compute = () =>{
    console.log(inputBill, inputPeople)
    if(inputBill == 0 && inputPeople == 0){
        document.getElementById("people").classList.add("outline", "outline-1", "outline-red-700")
        document.getElementById("bill").classList.add("outline", "outline-1", "outline-red-700")
        errorMessage1.classList.remove("invisible")
        errorMessage2.classList.remove("invisible")
    }else if(inputBill != 0 && inputPeople == 0){
        document.getElementById("people").classList.add("outline", "outline-1", "outline-red-700")
        document.getElementById("bill").classList.remove("outline", "outline-1", "outline-red-700")
        errorMessage1.classList.add("invisible")
        errorMessage2.classList.remove("invisible")
    }else if(inputPeople != 0 && inputBill == 0){
        document.getElementById("people").classList.remove("outline", "outline-1", "outline-red-700")
        document.getElementById("bill").classList.add("outline", "outline-1", "outline-red-700")
        errorMessage2.classList.add("invisible")
        errorMessage1.classList.remove("invisible")
    }
    else{
        document.getElementById("people").classList.remove("outline", "outline-1", "outline-red-700")
        document.getElementById("bill").classList.remove("outline", "outline-1", "outline-red-700")
        errorMessage1.classList.add("invisible")
        errorMessage2.classList.add("invisible")
        total = inputBill * (100 + tip) / 100;
        let totalPerson = total / inputPeople
        let tipPerson = tip / inputPeople
        tipPerPerson.innerText = '$' + tipPerson.toFixed(2)
        totalPerPerson.innerText = '$' + totalPerson.toFixed(2)
    }  

}

const resetCalculator = () =>{
 inputBill = 0
 inputPeople = 0
 tip = 0
 tipPerPerson.innerText = '$0.00' 
totalPerPerson.innerText = '$0.00' 
}
