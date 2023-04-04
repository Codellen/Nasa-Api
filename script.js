const currentDate = new Date().toISOString().split("T")[0];
console.log(currentDate)
getCurrentImageOfTheDay(currentDate)

let arr = [];
function getCurrentImageOfTheDay(date)
{
  
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=vq5didNHBKqjRhd4PcFf7NOhnmpZnmcBCVBxwM9T&date=${date}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        const imagecontainer = document.getElementById("current-image-container");
        const container = document.getElementById("container");
        
       imagecontainer.innerHTML=""
        const head = document.createElement("h1")
        head.classList.add("heading")
        const imagediv = document.createElement("img");
        head.innerHTML="NASA Image Of the Day"
        const title = document.createElement("h2");
        title.classList.add("heading1")
        title.innerHTML= data.title;
        const descrip = document.createElement("h5");
        descrip.classList.add("heading1")
        descrip.innerHTML = data.explanation;


        imagediv.setAttribute("src",data.hdurl)
         imagecontainer.appendChild(head)
        imagecontainer.appendChild(imagediv)
        imagecontainer.appendChild(title)
        imagecontainer.appendChild(descrip)

        //container.appendChild(imagecontainer)
    
    })
}

function getImageOfTheDay(newdate){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=vq5didNHBKqjRhd4PcFf7NOhnmpZnmcBCVBxwM9T&date=${newdate}`)
    .then((res)=>res.json())
    .then((data)=>{
        //console.log(data)
        const imagecontainer = document.getElementById("current-image-container");
        const container = document.getElementById("container");
        
       imagecontainer.innerHTML=""
        const head = document.createElement("h1")
        head.classList.add("heading")
        const imagediv = document.createElement("img");
        head.innerHTML=`Picture on ${newdate}`
        const title = document.createElement("h2");
        title.classList.add("heading1")
        title.innerHTML= data.title;
        const descrip = document.createElement("h5");
        descrip.classList.add("heading1")
        descrip.innerHTML = data.explanation;


        imagediv.setAttribute("src",data.hdurl)
         imagecontainer.appendChild(head)
        imagecontainer.appendChild(imagediv)
        imagecontainer.appendChild(title)
        imagecontainer.appendChild(descrip)

        //container.appendChild(imagecontainer)
    
    })
}


const searchbtn = document.getElementById("search-form")

searchbtn.addEventListener("click",()=>{
    const input = document.getElementById("search-input").value
    let newdate = input;
    console.log(newdate)
    getImageOfTheDay(newdate)
    saveSearch(newdate);
    //
})

function saveSearch(storedate)
{
    arr.push(storedate)
    let date = JSON.stringify(arr)
    //console.log(date)
   let stringify=  localStorage.setItem("searchdate",date)
    //arr.push(stringify)
    //console.log(arr)
    addSearchToHistory(storedate)
}

function addSearchToHistory(history)
{
    const ul = document.getElementById("search-history");
    const li = document.createElement("li");
    li.classList.add("list")
    li.innerHTML=history;

    li.addEventListener("click",()=>{
        getImageOfTheDay(history)
    })
    ul.appendChild(li)


}




