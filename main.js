const user=[]
//get form and tbody
const form=document.getElementById("userForm")
const tablebody=document.getElementById("tbody")
//add entry to users
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    user.push({name,email})
    form.reset()
    console.log(user);
    
})
