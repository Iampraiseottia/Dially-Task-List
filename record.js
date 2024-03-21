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



// DISPLAY DATE
const date =  document.getElementById('Date');
const displayDate =  document.getElementById('displayDate');
const currentDate = new Date();
const dateOptions = { dateStyle: 'short' };
const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
displayDate.textContent = formattedDate;
displayDate.style.fontWeight = '600';

date.addEventListener('input', function() {
    const value = date.value;
    displayDate.textContent = `The Above Task Is To Be Completed On ${value}`;
    saveDataLocally2();
});

function saveDataLocally2(){
    localStorage.setItem('message', displayDate.innerHTML);
}

function displaySameData2(){
    displayDate.innerHTML = localStorage.getItem('message');
}

displaySameData2();

// DISPLAY START TIME

var startTimeInput = document.getElementById('Start');
var startTimeDisplay = document.getElementById('startTimeDisplay');
startTimeDisplay.style.fontWeight = '600';

startTimeInput.addEventListener('input', function() {
    var startTime = startTimeInput.value;
    startTimeDisplay.textContent = `Task Start Time: ${startTime}`;
    saveStartTimeLocally();
});

function saveStartTimeLocally(){
    localStorage.setItem('taskStart', startTimeDisplay.innerHTML);
}

function displayStartTime(){
    startTimeDisplay.innerHTML = localStorage.getItem('taskStart');
}

displayStartTime();

// DISPLAY END TIME

var endTimeInput = document.getElementById('End');
var endTimeDisplay = document.getElementById('endTimeDisplay');
endTimeDisplay.style.fontWeight = '600';
endTimeInput.addEventListener('input', function() {
    var endTime = endTimeInput.value;
    endTimeDisplay.textContent = `Task End Time: ${endTime}`;
    saveEndTimeLocally();
});

function saveEndTimeLocally(){
    localStorage.setItem('taskEnd', endTimeDisplay.innerHTML);
}

function displayEndTime(){
    endTimeDisplay.innerHTML = localStorage.getItem('taskEnd');
}

displayEndTime();

