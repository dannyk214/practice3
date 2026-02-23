document.addEventListener('DOMContentLoaded', () => {
    const fab = document.querySelector('.round-btn');
    const todoList = document.querySelector('#todo-list');
    const doneList = document.querySelector('#done-list');
    const autoText = document.querySelector('.autoText');
    const progressFill = document.querySelector('#progress-fill');
    const statusText = document.querySelector('#status-text');
    const homeBtn = document.querySelector('#mission-home');

    const msg = "Your day doesn't run you; you run the day. Precision is the only path to dominance. Deploy your first mission.";
    let index = 0;
    let typeTimeout;

  
    function typeWriter() {
        if (index < msg.length) {
            autoText.innerHTML += msg.charAt(index);
            index++;
            typeTimeout = setTimeout(typeWriter, 30);
        }
    }

    
    function updateProgress() {
        const total = todoList.children.length + doneList.children.length;
        const done = doneList.children.length;
        const percentage = total === 0 ? 0 : Math.round((done / total) * 100);
        progressFill.style.width = `${percentage}%`;
        statusText.innerText = `${percentage}% Completed`;
    }

    
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        todoList.innerHTML = '';
        doneList.innerHTML = '';
        updateProgress();
        clearTimeout(typeTimeout);
        autoText.innerHTML = '';
        autoText.style.display = 'block';
        index = 0;
        typeWriter();
    });

    typeWriter();

    
    fab.addEventListener('click', () => {
        if (document.querySelector('.new-task')) return;
        autoText.style.display = 'none';

        const modal = document.createElement('div');
        modal.classList.add('new-task');
        modal.innerHTML = `
            <input type="text" placeholder="Mission Objective..." id="m-input">
            <button class="deploy-btn" id="m-deploy">DEPLOY MISSION</button>
            <button id="m-cancel" style="border:none; background:none; color:gray; cursor:pointer;">Cancel</button>
        `;
        document.body.appendChild(modal);

        const input = modal.querySelector('#m-input');
        input.focus();

        modal.querySelector('#m-deploy').addEventListener('click', () => {
            const val = input.value.trim();
            if (val !== "") {
                const li = document.createElement('li');
                li.innerHTML = `
                    <input type="checkbox">
                    <span>${val}</span>
                    <button class="task-delete-btn">✕</button>
                `;
                
                const cb = li.querySelector('input');
                const del = li.querySelector('.task-delete-btn');

                
                cb.addEventListener('change', () => {
                    if (cb.checked) doneList.appendChild(li);
                    else todoList.appendChild(li);
                    updateProgress();
                });

                
                del.addEventListener('click', () => {
                    li.style.transform = "scale(0.9)";
                    li.style.opacity = "0";
                    setTimeout(() => {
                        li.remove();
                        updateProgress();
                    }, 200);
                });

                todoList.appendChild(li);
                updateProgress();
                modal.remove();
            }
        });

        modal.querySelector('#m-cancel').addEventListener('click', () => modal.remove());
    });
});