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
    <button class="edit__btn">Edit</button>
    <button class="delete__btn">Delete</button>
    `
    const unorderedList = document.querySelector ("#todo__list")
    unorderedList.appendChild(list)
    addListenerToDelete()
}

function deleteMyToDo(clear){
    const targetDeleteButton = clear.target
    const oneToDoItem = targetDeleteButton.parentNode
    oneToDoItem.remove()
    console.log (oneToDoItem)
}

function addListenerToDelete (){
    const deleteButtons = document.querySelectorAll (".delete__btn")
    const lastDeleteButton = deleteButtons[deleteButtons.length-1]
    lastDeleteButton.addEventListener ("click", deleteMyToDo)
}

const toDoForm = document.querySelector (".form")
toDoForm.addEventListener ("submit", submitMyToDo)