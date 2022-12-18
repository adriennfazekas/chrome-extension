
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = localStorage.getItem( myLeads)
    leadsFromLocalStorage = JSON.parse(leadsFromLocalStorage)
    console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
    console.log( localStorage.getItem("myLeads") )    
})


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += 
            `<li>
                <a href='${myLeads[i]}' target='_blank'> ${myLeads[i]} </a>
            </li>`
    }
    ulEl.innerHTML = listItems
}
