// const btnAdd = document.querySelector('#btn-add')
const form = document.querySelector("#form-add")
const inputAdd = document.querySelector("#input-add");
const toDoList = document.querySelector(".to-do-list");

// function deleteLi(event) {
//     event.target.parentElement.remove();
// }


//btnAdd.addEventListener('click', (e) => {
// code that below
//})

form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    
    const userText = inputAdd.value.trim();

    if (userText === "") {
    alert("Empty field");
    return;
    }

    const newLi = document.createElement("li");
    newLi.classList.add("to-do-list-item");

    const newInput = document.createElement("input");
    newInput.setAttribute("type", "checkbox");
    newInput.classList.add("to-do-list-item-input");
    newLi.append(newInput);

    const newSpan = document.createElement("span");
    newSpan.classList.add("to-do-list-item-text");
    newSpan.textContent = userText;
    newLi.append(newSpan);

    const newBtn = document.createElement("button");
    newBtn.classList.add("to-do-list-item-btn");
    newBtn.textContent = "Delete";
    newLi.append(newBtn);

    toDoList.append(newLi);

    // newBtn.addEventListener("click", deleteLi);

    newInput.addEventListener("change", () => {
    if (newInput.checked) {
        newSpan.style.opacity = "0.5";
        newBtn.style.opacity = "0.7";
    } else {
        newSpan.style.opacity = "1";
        newBtn.style.opacity = "1";
    }
    });

    inputAdd.value = "";
});

toDoList.addEventListener('click', (e) => {
    if(e.target.tagName !== 'BUTTON'){
        return
    }   
    e.target.parentElement.remove();
});