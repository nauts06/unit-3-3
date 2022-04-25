// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

 //let url = http://www.omdbapi.com/?i=tt3896198&apikey=364c90b3

   ///  let url = `http://www.omdbapi.com/?s=${mov}apikey=364c90b3`





   document.querySelector("#wallet").innerHTML = +localStorage.getItem("amount");
let timerId;

/* async function searchMovies(){
   let input =  document.querySelector("#search").value;
   let res = await fetch(`http://www.omdbapi.com/?apikey=f06cf562&s=${input}`);
   let data = await res.json();

   console.log(data.Search)
} */

const main= async ()=>{
    let input =  document.querySelector("#search").value;
   let res = await fetch(`http://www.omdbapi.com/?apikey=f06cf562&s=${input}`);
   let data = [];
   data['Search'] = [];
   if(res.Response != "False"){
        data = await res.json();
   }

   const list = data['Search']|| [];
   


    console.log(list);
    let movies = document.getElementById("movies");
    movies.innerHTML = "";

    list.map((v,index)=>{
        

        
        if(v.Poster != "N/A"){
            let div = document.createElement("div");
            div.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
            let img = "";

            img = document.createElement("img");
            img.style.height = "200px";
            img.style.width = "65%";
            img.setAttribute("src",v.Poster);

            let p = document.createElement("p");
            p.innerHTML = v.Title;

            let button  = document.createElement("button");
            button.setAttribute("id","book_now");
            button.innerHTML = "BOOk NOW"
            button.addEventListener("click",function(){
                alert(1);
            });

            div.append(img,p,button);
            movies.append(div);
        }
        

        


    });

    
}

const debounce = (func, delay) =>{
    if(timerId){
        //console.log(timerId)
        clearTimeout(timerId);
    }
    console.log('timerid',timerId)
    timerId = setTimeout(()=>{
        func();
    },delay);
}   

 

    //  document.querySelector("#wallet").innerHTML = +localStorage.getItem('amount')

    //  let id;

    //  const main = async()=>{
    //      let input = document.querySelector("#search").value 

    //      let res = await fetch(`http://www.omdbapi.com/?apikey=364c90b3=${input}`)

    //      let data =[]
        
    //      if(res.Response !="False"){
    //          data = await res.json()
    //      }
    //      console.log(data.Search)

    //      data.Search.map((v,index)=>{
    //          let movies = document.getElementById("movies")

    //          if(v.Poster!="N/A"){
    //              let div = document.createElement("div")

    //              let img = ""

    //              img = document.createElement("img")
    //              img.style.height = "200px"
    //              img.style.height = "68%"
    //              img.setAttribute("src",V.Poster)

    //              let p = document.createElement("p")
    //              p.innerHTML = v.Title

    //              let button= document.createElement("button")
    //              button.setAttribute("id","book_now")
    //              button.addEventListener("click",function(){
    //                  alert(1)
    //              })

    //              div.append(img,p,button)
    //              movies.append(div)



    //          }
    //      })
     

    //  }

    //  function debounce(func,delay){
    //      if(id){
    //          clearTimeout(id)
    //      }
    //      id=setTimeout(function(){
    //          func()
    //      },delay)
    //  }
