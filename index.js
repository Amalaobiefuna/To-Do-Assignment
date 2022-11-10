function submitMyToDo(e){
    e.preventDefault ()
    const inputField = document.querySelector(".form__input")
    const inputFieldvalue =inputField.value
    showAllToDo (inputFieldvalue)
    inputField.value = ""
}

function showAllToDo(toDoItem){
    let list = document.createElement("li")
    list.innerHTML = `
    <input class="todo__checkbox" type="checkbox" />
    <span>${toDoItem}</span>
    <input class="second-input" value=${toDoItem} hidden/>
    <button class="edit__btn">Edit</button>
    <button class="delete__btn">Delete</button>
    `
    const unorderedList = document.querySelector ("#todo__list")
    unorderedList.appendChild(list)
    addListenerToDelete()
    addListenerToEdit()
}

function deleteMyToDo(e){
    const targetDeleteButton = e.target
    const oneToDoItem = targetDeleteButton.parentNode
    oneToDoItem.remove()
    console.log (oneToDoItem)
}

function addListenerToDelete (){
    const deleteButtons = document.querySelectorAll (".delete__btn")
    const lastDeleteButton = deleteButtons[deleteButtons.length-1]
    lastDeleteButton.addEventListener ("click", deleteMyToDo)
}

function editMyToDo(e){
    const targetEditButton = e.target
    const spanElement = targetEditButton.previousElementSibling.previousElementSibling
    const secondInput = targetEditButton.previousElementSibling
    if(e.target.innerHTML==="Edit"){
        targetEditButton.innerHTML="Save"
        secondInput.hidden=false
        spanElement.hidden=true
        secondInput.focus()
    }else{
        spanElement.innerHTML=secondInput.value
        secondInput.hidden=true
        spanElement.hidden=false
        targetEditButton.innerHTML="Edit"
    }
}

function addListenerToEdit (){
    const editButtons = document.querySelectorAll (".edit__btn")
    const lastEditButton = editButtons[editButtons.length-1]
    lastEditButton.addEventListener ("click", editMyToDo)
}

const toDoForm = document.querySelector (".form")
toDoForm.addEventListener ("submit", submitMyToDo)