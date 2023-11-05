const bookGet = document.querySelector(".bookGet")
const book_id = document.querySelector(".book_id")
const book_id2 = document.querySelector(".book_id2")

const deleteBookBtn = document.querySelector("#deleteBookBtn")




async function bookData() {
    const req = await fetch('http://localhost:9090/book')
    const res = await req.json()

    console.log(res);
    const data = res.data
    bookAllData(data)
}
bookData()

async function bookAllData(data) {
    data.forEach(e => {
        console.log(e);
        const c = document.createElement("div")
        c.classList.add("getBox")
        c.innerHTML = ` 
         
        <span>title: ${e.title}</span>
        <span>cat_ref_id : ${e.cat_ref_id}</span>
        <span>year: ${e.year}</span>
        <span>page :${e.page}</span>
        <span>${e.page}</span>
        <span></span>
      <img src="./img/edit.png" alt="">
      <img src="./img/delete.png" alt="">

               
               `

        bookGet.appendChild(c)

        c.addEventListener("click", () => {
            // console.log(e._id);
            const bId = e._id
            book_id.innerHTML = `${bId}`
            book_id2.innerHTML = `${bId}`


            bookPut(bId)
            deleteBook(bId)
        })
    });
}


document.getElementById('postFormBook').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch('http://localhost:9090/book', {
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



function bookPut(bId) {



    document.getElementById('putFormBook').addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        fetch(`http://localhost:9090/book/${bId}`, {
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

function deleteBook(bId) {
    deleteBookBtn.addEventListener("click",  () => {
      
           fetch(`http://localhost:9090/book/${bId}`, {
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

