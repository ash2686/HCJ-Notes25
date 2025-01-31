let listView = document.getElementById('list-view');
let TA = document.getElementsByTagName('textarea');
let listviewItem = document.getElementsByClassName('list-view-item');
TA[0].value = '';
let savedNotes = [];
let noteId = 1;
let listItem;



function loadNotes(){
    try{
        let rawData = localStorage.getItem("notes");
        savedNotes = rawData ? JSON.parse(rawData):[];
        
    }catch(error){
        console.error("Error parsing JSON daata from localStorage:",error);
        savedNotes = [];
    }
}
   
    
    window.onload = function () {
        savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        savedNotes.forEach(note => addNoteToDisplay(note));
        let allNotes = document.querySelectorAll(".list-view-item");
        // allNotes.forEach(x=>console.log(x));
        selectNote(allNotes);
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
    noteId = 1;
}

// newNote does something its here

function newNote(){
    TA[0].value = '';
    TA[0].focus();
}

function addNoteToDisplay(noteText) {
    listItem = document.createElement('div');
    listItem.classList.add("list-view-item");
    let delNote = document.createElement('button');
    delNote.value = 'delete';
    delNote.innerText="delete";
    delNote.classList.add("del-btn");
    delNote.onclick = delItem;

    let newPara = document.createElement('p');
    newPara.classList.add("list-item-para");
    newPara.innerText = noteText;
    listItem.appendChild(newPara);

    listView.appendChild(listItem);
    listItem.appendChild(delNote);
    listItem.style.border = '.1px solid black';

    listItem.id = `noteId-${noteId}`;
    noteId++;
}


function selectNote(x){
      

      for(let i=0;i<x.length;i++){
            x[i].addEventListener("click",function(){
                x[i].style.backgroundColor="rgb(166, 245, 192)";
                // console.log(x[i].children);
            });
      }
}


/* function delItem(event) {
    let delItem = event.target.parentElement; // Get the parent element (the note item)

    console.log("List item to be deleted is " + delItem.id);
    console.log(listItem);
    let noteText = listItem.querySelector(delItem);

    // Filter out the note to be deleted from the savedNotes array
    savedNotes = savedNotes.filter(note => note !== noteText);

    // Update the localStorage with the updated savedNotes array
    localStorage.setItem('notes', JSON.stringify(savedNotes));

    // Remove the note item from the display
    localStorage.removeItem("delItem");


    listView.removeChild(delItem);
}





 */

function delItem(event) {
    let delItem = event.target.parentElement; // Get the clicked note (div)

    console.log("Deleting note with ID: " + delItem.id);

    // Get the note text (entire div)
    let noteText = delItem.querySelector("p").innerText;

    // Remove the note text from savedNotes array
    savedNotes = savedNotes.filter(note => note !== noteText);

    // Update localStorage with the updated array
    localStorage.setItem('notes', JSON.stringify(savedNotes));

    // Remove the note div from the UI
    delItem.remove();
}








