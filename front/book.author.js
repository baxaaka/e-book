const authorGet = document.querySelector(".authorGet")
const book_id = document.querySelector(".book_id")
const book_id2 = document.querySelector(".book_id2")

const deleteBookBtn = document.querySelector("#deleteBookBtn")




async function authorData() {
    const req = await fetch('http://localhost:9090/authorbook')
    const res = await req.json()

    const data = res.data


    authorAllData(data)
}
authorData()

async function authorAllData(data) {
    data.forEach(e => {
        console.log(e);
        const c = document.createElement("div")
        c.classList.add("getBox")
        c.innerHTML = ` 
        <span>book_ref_id: ${e.book_ref_id._id}</span>
        <span>book name: ${e.book_ref_id.title}</span>
        <span>author_ref_id : ${e.author_ref_id.username}</span>
        <span>author username : ${e.author_ref_id._id}</span>

      <img src="./img/edit.png" alt="">
      <img src="./img/delete.png" alt="">

               
               `

        authorGet.appendChild(c)

        c.addEventListener("click", () => {
            const aId = e._id
            book_id.innerHTML = `${aId}`
            book_id2.innerHTML = `${aId}`


            authorPut(aId)
            deleteAuthor(aId)
        })
    });
}


document.getElementById('postFormAuthor').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch('http://localhost:9090/authorbook', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});



function authorPut(aId) {



    document.getElementById('putFormAuthor').addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        fetch(`http://localhost:9090/authorbook/${aId}`, {
            method: 'PUT',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

}

function deleteAuthor(aId) {
    deleteBookBtn.addEventListener("click", () => {

        fetch(`http://localhost:9090/authorbook/${aId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        setTimeout(() => {
            alert("deleted")
        }, 1000);
    });
}

