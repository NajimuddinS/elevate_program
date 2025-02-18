let button=document.getElementById('add').addEventListener('click',function(){
    const title=document.getElementById("title").value
    const desc=document.getElementById("desc").value
    const category=document.getElementById('category-select').value

    if (!title || !desc || !category){
        alert("field empty")
    } else {
        let field=document.getElementById("tasks")
        let additem=document.createElement("ul")
        additem.classList.add('item')

        additem.innerHTML=`
            <li>${title}</li>
            <li>${desc}</li>
            <li>${category}</li>
            <br>`
        field.append(additem)

        document.getElementById('title').value=''
        document.getElementById('desc').value=''
    }
})

// item.append({title,description:desc})
// const todo={
//     title:title.value,
//     description:desc.title
// };
// console.log(item)

// function getData(){

// }

// function tables(){
//     const container = document.getElementById("tasks")
//     container.innerHTML=""
// }