let listView = document.getElementById('list-view');
let TA = document.getElementsByTagName('textarea');
let listviewItem = document.getElementsByClassName('list-view-item');
TA[0].value = '';


function saveNote(){
    let listItem = document.createElement('div'); 
    let btnsClass =  document.createElement('div');
    let newPara = document.createElement('p');

    listItem.classList.add("list-view-item");
    btnsClass.classList.add("item-edit-btns");
    newPara.classList.add("list-item-para");

   

    if(TA[0].value == ''){
       newNote();
}
    else
        newPara.innerText = TA[0].value;    

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btns');
    editBtn.innerText = 'Edit';
    editBtn.setAttribute('onClick','editItem()');
    let delBtn =  document.createElement('button');
    delBtn.classList.add('edit-btns');
    delBtn.innerText = 'x';


    btnsClass.appendChild(editBtn);
    btnsClass.appendChild(delBtn);

    listItem.appendChild(newPara);
    listItem.appendChild(btnsClass);

    listItem.style.border = '.1px solid black';


    listView.appendChild(listItem);
    TA[0].value = '';
    TA[0].focus();

}

function clearNotes(){
    // alert('Are you sure, you want to delete all the notes at once?');
         listView.innerHTML='';
}


//   for(let i = 0; i < listviewItem.length; i++){
    
//    listviewItem[i].addEventListener('click',function(e){
//     console.log(e);

//     if (e.target.classList.contains('list-view-item')){
//         e.target.classList.add('selected-item');
//         e.target.style.backgroundColor='blue';
//         let clickedItem = e.target.firstElementChild;
//         TA[0].value = clickedItem.innerHTML;
//     }
//    })
// }

listView.addEventListener('click', function (e) {
    let asd = e.querySelectorAll('list-view'); // Access direct children elements

// Example: Iterate over children
for (let i = 0; i < asd.length; i++) {
    console.log(asd[i]); // Logs each child element
}
    if (e.target.classList.contains('list-view-item')) {
        // Remove the 'selected-item' class and reset styles for all items
        document.querySelectorAll('.list-view-item').forEach(item => {
            item.classList.remove('selected-item');
            item.style.backgroundColor = '';
        });

        // Add 'selected-item' class and style to the clicked item
        e.target.classList.add('selected-item');
        e.target.style.backgroundColor = 'blue';

        // Update the textarea with the clicked item's content
        let clickedItem = e.target.querySelector('.list-item-para');
        TA.value = clickedItem ? clickedItem.innerHTML : '';
    }
});


function editItem(){
    console.log('workign on it');
}
function newNote(){
    TA[0].value = '';
    TA[0].focus();
}