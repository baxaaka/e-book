
const dasturlashBox = document.querySelector(".dasturlash-box")

const searchBook = document.querySelector("#searchBook")
const category = document.querySelector(".category")

async function bookData() {
    const req = await fetch('http://localhost:9090/book')
    const res = await req.json()

    const data = res.data
    bookAllData(data)
}
bookData()

async function bookAllData(data) {
    data.forEach(e => {
        const c = document.createElement("div")
        c.classList.add("dasturlash-card")
      
        c.innerHTML=`<div class="loading">
        <div class="image"></div>
        <div class="content">
          <h2></h2>
        
        </div>
        </div> `
    

        setTimeout(() => {
            c.innerHTML = ` 
        <img src="http://localhost:9090/book/${e.book_img}" alt="" />
        <a href=${e._id} class="bookName">${e.title}</a>
              
               ` 
        }, 1000);
     
        
         c.addEventListener("click", () => {
            const bId = e._id
            localStorage.setItem("book_id" ,bId)
            window.open("/book.html")
  
        })

        Category(c)
        dasturlashBox.appendChild(c)
    });
}



async function Category(c){
    const req = await fetch('http://localhost:9090/category')
    const res = await req.json()
    const data = res.data
 
    data.forEach(e => {
      const cId = e._id;

    const c2 = document.createElement("div");
    c2.classList.add("category-card");
    c2.innerHTML = `
      <span href="">${e.cat_name}</span>
    `;



    c2.addEventListener("click", async() => {

    //   const findId = data.find((e)=>e.cat_ref_id._id ===cId)
    //   console.log(findId);
    const req = await fetch(`http://localhost:9090/category/${cId}`)
    const res = await req.json()
    const data = res.data
    data.forEach(e => {
        c.innerHTML = `
        <img src="http://localhost:9090/book/${e.book_img}" alt="" />
        <a href=${e._id} class="bookName">${e.title}</a>
      `;
    })

    //   if (findId) {

       
    //   } else{
    //     c.innerHTML=""

    //   }
    });
  
    category.appendChild(c2);
});
}

searchBook.addEventListener("keyup" , (e)=>{
    if(e.keyCode =="13"){
        const inpValue = searchBook.value
        console.log(inpValue);
        searchName(inpValue)
    }
})

async function searchName(inpValue){
    const req = await fetch(`http://localhost:9090/book?search_book=${inpValue}`)
    const res = await req.json()

    const data = res.data
    while (dasturlashBox.firstChild) {
        dasturlashBox.removeChild(dasturlashBox.firstChild);
    }
    data.forEach(e => {
   
        const c = document.createElement("div")
        c.classList.add("dasturlash-card")
        c.innerHTML=`<div class="loading">
        <div class="image"></div>
        <div class="content">
          <h2></h2>
        
        </div>
        </div> `
       

        setTimeout(() => {
            c.innerHTML = ` 
        <img src="http://localhost:9090/book/${e.book_img}" alt="" />
        <a href=${e._id} class="bookName">${e.title}</a>

               
               ` 
        }, 1000);

         dasturlashBox.appendChild(c)
         c.addEventListener("click", () => {
            const bId = e._id
            localStorage.setItem("book_id" ,bId)
            window.open("/book.html")
  
        })
    });


}