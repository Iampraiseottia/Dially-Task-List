const getTask = document.getElementById('InputTask');
const taskList = document.getElementById('taskList');
function addTask(){
    if(getTask.value === ''){
        alert('Please Input A Task!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML =  getTask.value;
        taskList.appendChild(li);
        let cross = document.createElement('span');
        cross.innerHTML = '\u00d7';
        li.appendChild(cross);

    }
    getTask.value = '';
    saveDataLocally();
}

taskList.addEventListener('click', function(item){
    if(item.target.tagName === 'LI'){
        item.target.classList.toggle('checked');
        saveDataLocally();
    }
    else if(item.target.tagName === 'SPAN'){
        item.target.parentElement.remove();
        saveDataLocally();
    }
}, false);

function saveDataLocally(){
    localStorage.setItem('data', taskList.innerHTML);
}

function displaySameData(){
    taskList.innerHTML = localStorage.getItem('data');
}

displaySameData();

