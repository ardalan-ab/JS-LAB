


const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const d =new Date()
// node select

 const addTaskBtn= document.getElementById('addTaskBtn');
 const taskInput = document.getElementById('taskInput');
 const taskList = document.getElementById('taskList');
const date =document.querySelector("h2")


// functions


function toDo() {
    
    
    if (taskInput.value) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}


// handle date
date.textContent=days[d.getDay()]




// events
addTaskBtn.addEventListener('click',toDo);