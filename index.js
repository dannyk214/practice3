let main = document.querySelector('.main')
let fab = document.querySelector('.fab-container')
let task = document.querySelector('.task')
let taskDone = document.querySelector('.task-done')
let taskUndone = document.querySelector('.task-undone')
let autoText = document.querySelector('.autoText')
let overall = document.querySelector('.overall');   
let overallContainer = document.querySelector('.overall-container');
let icon = document.querySelector('.icon');
let task2 = document.querySelector('.task2'); 



let taskdiv = document.createElement('div');
taskdiv.classList.add('task-div');



let taskdondiv = document.createElement('div');
taskdondiv.classList.add('task-div');

taskDone.appendChild(taskdondiv);

let taskundone = document.createElement('div');
taskundone.classList.add('task-div');
taskUndone.appendChild(taskundone);

let ullist = document.createElement('ul');
ullist.classList.add('mission-list');
ullist.id = 'main-task-container';

taskdiv.appendChild(ullist);


const message = "Your day doesn't run you; you run the day. Idle hands build nothing. Precision is the only path to dominance. The world is fueled by those who execute while others hesitate. Every second unassigned is a resource wasted. Do not let your potential drift—command it into existence. Your objectives are waiting for a leader. Lock in your targets now. Locate the [+] trigger at the bottom right corner to deploy your first mission.";

let index = 0;

function typeWriter() {
  if (index < message.length) {
    autoText.innerHTML += message.charAt(index);
    index++;

    setTimeout(typeWriter, 30); 
  }
}

// Start the sequence when the window loads
window.onload = typeWriter;
typeWriter();


fab.addEventListener('click', pop);


function pop(){
autoText.remove();


let newTask = document.createElement('div');
let input = document.createElement('input');
let checkbox = document.createElement('input');
let btn = document.createElement('button');
let exit = document.createElement('button');


exit.textContent = 'X';
exit.classList.add('exit-btn');
btn.textContent = 'submit';
btn.classList.add('deploy-btn');


newTask.classList.add('new-task');
input.classList.add('input-container');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter your task');
checkbox.setAttribute('type', 'checkbox');


task.appendChild(exit);
btn.addEventListener('click', submit)

function submit() {
    
    let taskli = document.createElement('li');
    taskli.textContent = input.value;
    ullist.appendChild(taskli);
    taskli.appendChild(checkbox);
    task2.appendChild(ullist);
    

    let tasklis = document.createElement('li');
    tasklis.textContent = input.value;
    ullist.appendChild(tasklis);
    tasklis.appendChild(checkbox);
    task2.appendChild(ullist);
    

    
}



exit.addEventListener('click', ext)
function ext() {
    newTask.remove();

    typeWriter();
}


newTask.appendChild(exit);
newTask.appendChild(btn);
newTask.appendChild(input);
main.appendChild(newTask);

}


task.addEventListener('click', taskList);

function taskList() {
  overall.remove();
  overallContainer.appendChild (task);
  
  
}

let exit2 = document.createElement('button');
exit2.textContent = 'X';
exit2.classList.add('exit-btn');
task.appendChild(exit2);