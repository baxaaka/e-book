const section = document.querySelector(".section")

async function bookCard(bId) {

    const req = await fetch(`http://localhost:9090/book/${bId}`)
    const blob = await req.blob()

    // const data = res.data

    const c = document.createElement("div")
    c.classList.add("readBox")
    c.innerHTML = ` 
    <embed
    src="${URL.createObjectURL(blob)}#toolbar=0"
    type="" />
    </div>
               `
  
    section.appendChild(c)


}

const bId = localStorage.getItem("pdf")

bookCard(bId)
