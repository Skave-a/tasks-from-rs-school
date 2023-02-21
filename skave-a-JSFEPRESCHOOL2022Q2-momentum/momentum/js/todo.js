const toDoContainer = document.querySelector('.todo-container');
const toDo = document.querySelector('.todo');
const toDoP = document.querySelector('.todo-p');

const toDoButton = document.querySelector('.todo__button');
const toDoBlock = document.querySelector('.todo__enter-block');
const toDoAddCapt = document.querySelector('.todo__add-new');

const toDoEnter = document.querySelector('.todo__enter');
const toDoItems = document.querySelector('.todo__items');
const toDoTask = document.querySelector('.todo__task');





function toDoAppear() {
  toDo.classList.remove('none')
  toDoContainer.classList.add('active')
  if (arrToDo.length == 0) {
    toDoButton.classList.remove('none')
    toDoBlock.classList.add('none')
    toDoAddCapt.classList.remove('none')
  }
}
toDoP.addEventListener('click', toDoAppear)

document.addEventListener('click', (e) => {
  if (e.target == toDoContainer) {
    toDo.classList.add('none')
    toDoContainer.classList.remove('active')
  }
})

function pushFirstButton() {
  toDoButton.addEventListener('click', () => {
    toDoButton.classList.add('none')
    toDoBlock.classList.remove('none')
    toDoAddCapt.classList.add('none')
  })
}
pushFirstButton()

let arrToDo = [];
//localStorage.setItem('todo', JSON.stringify(arrToDo));

if (localStorage.getItem('todo')) {
  arrToDo = JSON.parse(localStorage.getItem('todo'));
  displayToDoItems();
  toDoButton.classList.add('none')
  toDoBlock.classList.remove('none')
  toDoAddCapt.classList.add('none')
}

toDoEnter.addEventListener('click', () => {
  if (toDoTask.value != '') {
    let objToDo = {
      todo: toDoTask.value,
      checked: false
    }
    arrToDo.push(objToDo);
    displayToDoItems();
    localStorage.setItem('todo', JSON.stringify(arrToDo));
    toDoTask.value = '';
  }
})

function displayToDoItems() {
  toDoItems.classList.remove('none')

  let displayItem = ''
  arrToDo.forEach(function (item, index) {
    //console.log(item)
    displayItem += `
    <li class="list__item">
    <input type="checkbox" id="item_${index}" class="checkbox" ${item.checked ? 'checked' : ''}>
    <label for="item_${index}">${item.todo}</label>
    <img src="assets/svg/delete.png" alt="enter" class="todo__delete" id="it_${index}">
    </li>
    `;
    toDoItems.innerHTML = displayItem;
  })
  if (arrToDo.length == 0) {

    toDoButton.classList.remove('none')
    toDoBlock.classList.add('none')
    toDoAddCapt.classList.remove('none')
    toDoItems.classList.add('none')
  }
}

toDoItems.addEventListener('change', (e) => {
  let idItem = e.target.getAttribute('id');
  let forLabel = toDoItems.querySelector('[for=' + idItem + ']');
  let valueLabel = forLabel.innerHTML;

  arrToDo.forEach(function (item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem('todo', JSON.stringify(arrToDo))
    }
  })
})




toDoItems.addEventListener('click', (e, i) => {
  //console.log(i)
  //for (let i = 0; i < 10; i++) {
  //let forLabelh = toDoItems.querySelector('#it_' + i);
  //console.log(forLabelh)
  //  }

  // if (e.target === toDoDelete) {
  //   console.log('f')
  // }
  const toDoDelete = document.querySelectorAll('.todo__delete');
  //  console.log(toDoDelete)

  // /toDoDelete.forEach(function (item, i) {
  //   let forLabelh = toDoItems.querySelector('#it_' + i);
  //   console.log(forLabelh)
  // })
  for (let i = 0; i < toDoDelete.length; i++) {
    // arrToDo.forEach(function (item) {
    //   if (e.target === toDoDelete[i]) {
    //     console.log(toDoDelete[i])

    //  item.todo.splice(i, 1);
    //   }
    //})

    if (e.target === toDoDelete[i]) {
      //let item = arrToDo[i];
      //console.log(toDoDelete[i])
      //  console.log('item=', item, 'arrToDo=', arrToDo)
      arrToDo.splice(i, 1);
      localStorage.setItem('todo', JSON.stringify(arrToDo))
      displayToDoItems();
    }
  }
})
