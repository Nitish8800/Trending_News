let newsData = JSON.parse(localStorage.getItem("newsDetails"));

console.log(newsData);
let show = document.getElementById("main");


function display(newsData){
    show.innerHTML=""
let mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "hoverEffect");


let div_1 = document.createElement("div");
let div_2 = document.createElement("div");
let div_3 = document.createElement("div");
let div_4 = document.createElement("p");
div_4.style.width="100%";
div_4.style.marginTop="-1%";

let btn = document.createElement("button");
btn.innerHTML=`<a href=${newsData.url}>Read More</a>`;

let descriptions =document.createElement("p");
descriptions.innerText = newsData.description;
// descriptions.innerText = description


 let publishedAts = document.createElement("p");
 publishedAts.innerText=newsData.publishedAt;
 publishedAts.style.color="teal";

 let Titles = document.createElement("p");
 Titles.innerText=newsData.title;
 let contents = document.createElement("p");
 contents.innerText=newsData.content;


let images = document.createElement("img");
images.src = newsData.urlToImage;
images.style = "width:300px;height:160px";

let divLine = document.createElement("div");
divLine.style = "background-color:rgb(218, 218, 218); height:0.5px; width:100%; margin:auto;";

div_1.append(Titles,publishedAts);
div_2.append(descriptions);
div_3.append(images);
div_4.append(contents);

mainDiv.append(div_1,div_2,div_3);
 show.append(mainDiv,div_4,btn,divLine);
}
display(newsData);