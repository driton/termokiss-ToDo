
var isNew = true
var editedIndex = -1
var todoList = [
    {
        id: 1,
        desc: 'Lorem ipsum dolor sit amet',
        completed: false
    },
    {
        id: 2,
        desc: 'assas Lorem ipsum dolor sit amet',
        completed: true
    },
    {
        id: 3,
        desc: 'asdsdas Lorem ipsum dolor sit amet',
        completed: false
    }
]

function vizatoHTMLPerListenI() {
    var listaHTML = ''
    var listaHTMLCompleted = ''
    for (let i = 0; i < todoList.length; i++) {

        if (todoList[i].completed == true) {
            listaHTMLCompleted += `<li>
         <span><input onclick="ndryshoGjendje(${i})" type="checkbox" checked></span>
         <span class="todo-text">${todoList[i].desc}</span>
         <span>
             <button onclick="edito(${i})" class="edit">Edito</button>
             <button onclick="fshijeToDo(${todoList[i].id}, ${i})" class="delete">Fshije</button>
         </span>
    </li>`
        } else {
            listaHTML += `<li>
         <span><input onclick="ndryshoGjendje(${i})" type="checkbox"></span>
         <span class="todo-text">${todoList[i].desc}</span>
         <span>
             <button onclick="edito(${i})" class="edit">Edito</button>
             <button onclick="fshijeToDo(${todoList[i].id}, ${i})" class="delete">Fshije</button>
         </span>
    </li>`
        }

    }
    document.getElementById('listaEPaKompletume').innerHTML = listaHTML
    document.getElementById('listaEKompletume').innerHTML = listaHTMLCompleted
}



function onClickTest() {
    alert('Jemi te test Butoni')
}

function shtoToDo(param) {

    var newValue = document.getElementById('newValue').value

    if (isNew == true) {
        if (newValue !== '') {
            todoList.push({
                id: 555,
                desc: newValue,
                completed: false
            })
    
           
        }
    } else {
        todoList[editedIndex].desc = newValue
        isNew = true
    }
   
    vizatoHTMLPerListenI()
    document.getElementById('newValue').value = ''
    
}

vizatoHTMLPerListenI()
function fshijeToDo(id, index) {
   // alert('Fshije kete id: ' + id)
    console.log(id)

todoList.splice(index,1)
    //todoList[index]
    console.log('lista: ', todoList)

    vizatoHTMLPerListenI()
}

function ndryshoGjendje(index) {
    if (todoList[index].completed) {
        todoList[index].completed = false
    } else {
        todoList[index].completed = true
    }

    vizatoHTMLPerListenI()
}

function edito(index) {
    isNew = false
    editedIndex = index
    document.getElementById('newValue').value = todoList[index].desc
}