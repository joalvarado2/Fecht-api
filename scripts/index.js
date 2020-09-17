var contenido = document.getElementById("contenido")

const traer = () =>{
    fetch("https://randomuser.me/api/")
    .then(res => res.json())  // trasformamos el texto o api en una data
    .then(data => {
       
        for(let i =0; i <= 9; i++){
            contenido.innerHTML += `<tr>
            <th scope="row">${data.results[i].gender}</th>
            <td>${data.results[i].dob.age}</td>
            <td>${data.results[i].name.first}</td>
            <td>${data.results[i].name.last}</td>
            <td>${data.results[i].email}</td>
          </tr>`
        }
    })
}