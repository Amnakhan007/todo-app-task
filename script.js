let list = document.getElementById("list");




function addtodo() {
    let todo_item = document.getElementById("todo_item");
    let li = document.createElement('li')
    let liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    list.appendChild(li)


    let delBtn = document.createElement("button")
    let delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)

    let editBtn = document.createElement("button")
    let editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class", "btn")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onclick", "editItem(this)")
    li.appendChild(delBtn)


    todo_item.value = ""

    console.log(li)
}
function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    let val = prompt("Enter updated value", e.parentNode)
    e.parentNode.firstChild.nodeValue = val;
}