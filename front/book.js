// const bookGet = document.querySelector(".bookGet")
// const book_id = document.querySelector(".book_id")

const section = document.querySelector(".section")

const bId = localStorage.getItem("book_id")

async function bookCard(bId) {
  const c = document.createElement("div")
  c.classList.add("book-card")
  if(!bId){
    c.innerHTML=` <h1>Hali kitob tanlamadingiz</h1>`
    console.log("yooq");
  }else{
    const req = await fetch(`http://localhost:9090/book/${bId}`)
    const res = await req.json()

    const data = res.data

    console.log(data);
    const c = document.createElement("div")
    c.classList.add("book-card")
  
    c.innerHTML = ` 
    <img src="http://localhost:9090/book/${data.book_img}" alt="" class="book-img"/>
        <a href="" class="author-name">Pushkin </a>
        <span class="book-name"> ${data.title}</span>
        <span class="year-book"><b>Yili:</b> ${data.year}</span>
        <span class="page-book">${data.page}: bet</span>
        <div class="book-jenre">
          Janri :
          <a href="">#Roman</a>
          <a href="">#Roman</a>
        </div>
        <button id="bookReadBtn">
          <a
            href="./read.html"
            >Kitobni oqish</a
          >
        </button>
        <div class="about-book">
          <span class="about1"><b>Kitob Haqida</b></span>
          <span class="about2">${data.about_book}</span>
     
        </div>
               `
    localStorage.setItem("pdf", data.book_file)
    section.appendChild(c)

  }
  section.appendChild(c)


}

bookCard(bId)
