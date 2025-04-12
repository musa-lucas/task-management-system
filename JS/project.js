const modal= document.getElementById("modal");
const onsummit= document.getElementById("onsubmmit");
const closemodal= document.getelementbyid("closemodal");

onsummit.addEventListener("submit",function (){
    any
    modal.style.display="flex";
    Event.preventdeault();
});
closemodal.addEventListener("click",()=>{
    modal.style.display="none";
});

function addtask(){
    const taskinput=document.getElementById('taskinput');
    const tasklist=document.getElementById('tasklist');
    if(taskinput.ariaValueMax.trim()==='') {
        alert('please enter a task.');
        return;
    }
};
const li=document.createElement('li');
li.innerHTML=`
${taskinput.value}
<button class="delete-btn" onclick="deletTask(this)">Delete</button>`;
tasklist.appendChild(li);
taskinput.value='';
function deleteTask(button){
    button.parentelement.remove();
}

