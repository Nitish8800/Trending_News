let show = document.getElementById("main");
// let urls = `https://gnews.io/api/v4/search?q=${el}&token=146c0e363e8dc06b075a3d9828b9548f&lang=en`;



async function storeSearchterm() {

        try {
            let inp = document.getElementById("searchbar").value;
        const response = await fetch(`https://newsapi.org/v2/everything?q=${inp}&apiKey=eae3bded4a2e40fb9a7a13d27e649e11`)

        const data = await response.json()
        let articles = data.articles;

        // console.log(data);

        appendArticles(articles);
        console.log(articles);

    }
    catch (err) {
        console.log(err);
    }



}
// storeSearchterm()


function appendArticles(articles) {

    //add append logic here
    show.innerHTML=""
    articles.forEach(({title, publishedAt, urlToImage, description,url,content }) => {

        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id", "hoverEffect");


        let div_1 = document.createElement("div");
        let div_2 = document.createElement("div");
        let div_3 = document.createElement("div");



        let descriptions = document.createElement("p");
        descriptions.innerText = description;
        // descriptions.innerText = description


        let publishedAts = document.createElement("p");
        publishedAts.innerText = publishedAt;
        publishedAts.style.color = "teal";

        let Titles = document.createElement("p");
        Titles.innerText = title;


        let images = document.createElement("img");
        images.src = urlToImage;
        images.style = "width:300px;height:160px";

        let divLine = document.createElement("div");
        divLine.style = "background-color:rgb(218, 218, 218); height:0.5px; width:100%; margin:auto;";

        div_1.append(Titles, publishedAts);
        div_2.append(descriptions);
        div_3.append(images);

        mainDiv.append(div_1, div_2, div_3);
        show.append(mainDiv, divLine);


        
        let newsDetails = {
            title, publishedAt, urlToImage, description,url,content
        };
        mainDiv.onclick = function () {
            newsDetail(newsDetails);
        };


    });




}
function newsDetail(el) {
    localStorage.setItem("newsDetails", JSON.stringify(el));

    window.open("news.html");


}

export {storeSearchterm};



