let listView = document.getElementById('list-view');
let TA = document.getElementsByTagName('textarea');
let listviewItem = document.getElementsByClassName('list-view-item');
TA[0].value = '';
let savedNotes = [];

function loadNotes(){
    try{
        let rawData = localStorage.getItem("notes");
        savedNotes = rawData ? JSON.parse(rawData):[];
        console.log(localStorage.getItem('notes'));
    }catch(error){
        console.error("Error parsing JSON daata from localStorage:",error);
        savedNotes = [];
    }
}
   
    
    window.onload = function () {
        savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        savedNotes.forEach(note => addNoteToDisplay(note));
};


// Start of save function

function saveNote(){

    if (TA[0].value === '') { newNote(); return; }
    savedNotes.push(TA[0].value);
    localStorage.setItem('notes', JSON.stringify(savedNotes));

    addNoteToDisplay(TA[0].value);
    TA[0].value = '';
}


// End of Save Function

// Clear function right here
function clearArea() {
    if (confirm('Are you sure you want to delete all the notes?')) {
        listView.innerHTML = '';
        localStorage.removeItem('notes');
        savedNotes = [];
    }
}

// newNote does something its here

function newNote(){
    TA[0].value = '';
    TA[0].focus();
}

function addNoteToDisplay(noteText) {
    let listItem = document.createElement('div');
    listItem.classList.add("list-view-item");

    let newPara = document.createElement('p');
    newPara.classList.add("list-item-para");
    newPara.innerText = noteText;
    listItem.appendChild(newPara);

    listView.appendChild(listItem);
    listItem.style.border = '.1px solid black';
}


























