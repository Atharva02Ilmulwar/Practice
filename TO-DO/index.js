let addToDoButton = document.getElementById('todobutton');
let taskName = document.getElementById('textinput');
let toDoContainer = document.getElementById('whattodo');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.innerText = taskName.value;  // Use 'value' instead of 'Value'
    toDoContainer.appendChild(paragraph);
    taskName.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through'
    })
    paragraph.addEventListener('dbclick',function(){
        paragraph.removeChild()
    })
});
