const user=[]
//get form and tbody
const form=document.getElementById("userForm")
const tablebody=document.getElementById("tablebody")
const editInput=document.getElementById("editIndex")
//add entry to users
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    if(editIndex.value==""){
    user.push({name,email})// add new user
    }
    else{//edit user
    user[editIndex.value]={name,email}
    }
    form.reset()
    console.log(user);
    displayUser()
    
})

//list users on to table
const displayUser=()=>{
tablebody.innerHTML=""
user.forEach((user,index)=>{
tablebody.innerHTML+=
`<tr>
   <td>${index+1}</td>
   <td>${user.name}</td>
   <td>${user.email}</td>
   <td>
     <div class="d-flex">
     <button class="btn btn-warning" onClick=edit(${index})>Edit</button>
     <button class="btn btn-danger ms-3" onClick=del(${index})>Delete</button>
     </div>
   </td>
</tr>
`
})
}
const edit=(index)=>{
    document.getElementById('name').value=user[index].name
    document.getElementById('email').value=user[index].email
    editIndex.value=index
}

const del=(index)=>{
if(confirm("Are you sure,you want to remove the user!!!!")){
    user.splice(index,1)
    displayUser()
}
}
