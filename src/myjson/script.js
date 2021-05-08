const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://coronaclusters.in/", callback);

let covid = [];
let covidinfo = [];
let allindia = [];
function callback(err, res, html) {

    if (!err) {
        let $ = cheerio.load(html);
        let name = $("h5.card-title.text-md.text-md-lg");
        for (let i = 0; i < name.length; i++) {
            let data = $(name[i]).text();
            covid.push(data);
        }

        covidinfo.push({
            "All India Confirmed": covid[0],
            "All India Active": covid[1],
            "All India Recovered": covid[2],
            "All India Death": covid[3],
            "All States data": []
        });

        let indiastate = [];
        let data = "";
        let state = $("tbody tr th");
        let allstate = [];
        for (let i = 0; i < state.length - 1; i++) {
            data = $(state[i]).text();
            indiastate.push(data);
            allstate.push(data);
        }

        let indiastateinfo = [];
        let stateinfo = $("tbody tr td");
        for (let i = 0; i < stateinfo.length - 7; i = i + 7) {
            let Totalcases = $(stateinfo[i]).text();
            let NewCases = $(stateinfo[i + 1]).text();
            let TotalDeaths = $(stateinfo[i + 2]).text();
            let NewDeaths = $(stateinfo[i + 3]).text();
            let TotalRecovered = $(stateinfo[i + 4]).text();
            let ActiveCases = $(stateinfo[i + 5]).text();
            let LastUpdated = $(stateinfo[i + 6]).text();

            indiastateinfo.push({
                "Totalcases": Totalcases,
                "NewCases": NewCases,
                "TotalDeaths": TotalDeaths,
                "NewDeaths": NewDeaths,
                "TotalRecovered": TotalRecovered,
                "ActiveCases": ActiveCases,
                "LastUpdated": LastUpdated
            });

            
            allindia.push({
            "Totalcases": Totalcases,
            "NewCases": NewCases,
            "TotalDeaths": TotalDeaths,
            "NewDeaths": NewDeaths,
            "TotalRecovered": TotalRecovered,
            "ActiveCases": ActiveCases,
            "LastUpdated": LastUpdated});
        }

        for (let i = 0; i < indiastate.length - 1; i++) {
            covidinfo[0]["All States data"].push(
                indiastate[i], indiastateinfo[i]
            );
        }
        fs.writeFileSync("covidindo.json", JSON.stringify(covidinfo));
        fs.writeFileSync("allindia.json", JSON.stringify(allindia));
        fs.writeFileSync("allindiastate.json",JSON.stringify(allstate))


        request("https://news.google.com/search?for=delhi+covid", callback2);

        //you can change the location according to your locations. 
        //just replace uttrakhand to your locations from the url..🔥🔥

    }
}

let newsdata = []
function callback2(err, res, html) {
    if (!err) {
        let $ = cheerio.load(html);
        let newlink = $(".MQsxIb.xTewfe.R7GTQ.keNKEd.j7vNaf.Cc0Z5d.EjqUne h3 a");
        let newstitle = $(".MQsxIb.xTewfe.R7GTQ.keNKEd.j7vNaf.Cc0Z5d.EjqUne .xBbh9");
        let officalsite = $(".MQsxIb.xTewfe.R7GTQ.keNKEd.j7vNaf.Cc0Z5d.EjqUne .SVJrMe a");
        let newstime = $(".MQsxIb.xTewfe.R7GTQ.keNKEd.j7vNaf.Cc0Z5d.EjqUne .SVJrMe time");

        //you can get more news upto 300 🔥🔥
        //just change the loop value 20 to upto 300...
        
        for (let i = 0; i < 30; i++) {
            let myurl = $(newlink[i]).attr("href");
            let title = $(newlink[i]).text();
            let newsurl = "https://news.google.com/" + myurl;
            let discription = $(newstitle[i]).text();
            let newsite = $(officalsite[i]).text();
            let time = $(newstime[i]).text();

            newsdata.push({
                "Title": title,
                "Desciption": discription,
                "Go_To_Link": newsurl,
                "News Time": time,
                "Site Name": newsite
            })
        }
        fs.writeFileSync("CovidNews.json", JSON.stringify(newsdata));
    }

    request("https://www.imdb.com/chart/moviemeter/", callback3);
}

function callback3(err, res, html) {
    if (!err) {
        let $ = cheerio.load(html);
        let movieurl = $(".titleColumn a");

        for(let i = 0; i < 20-1 ; i++){   //change this to many
            let myurl = $(movieurl[i]).attr("href");
            let movielink = "https://www.imdb.com/"+ myurl;
            request(movielink,moviecallback); 
       }
       request("https://timesofindia.indiatimes.com/readersblog/writingwithpassion/5-ways-to-pass-time-during-the-lockdown-12028/",timepass);
    }
}

let topmovies = [];
function moviecallback(err,res,html){
    if(!err){
        let $ = cheerio.load(html);
        let moviename = $(".title_wrapper h1");
        let movienames = $(moviename).text();  //movie name and date


        let moviessummery = $(".summary_text");
        let sum = $(moviessummery).text();  
        let summery = sum.trim();

        let rating = $(".ratingValue span:nth-child(1)");
        let movierating = "6.5"
        if( $(rating).text() != ""){
            movierating = $(rating).text();
        } 

        let trailer = $(".slate a:nth-child(1)");
        let movietrailerurl = $(trailer[0]).attr("href");
        let movietrailer = "https://www.imdb.com"+movietrailerurl;  

        topmovies.push({
            "MovieName":movienames,
            "Summery": summery,
            "IMDb_Rating":movierating,
            "Trailer" : movietrailer
        });
    }
    fs.writeFileSync("Movie.json",JSON.stringify(topmovies));
}


let todo = [];
function timepass(err,res,html){
    if(!err){
        let $ = cheerio.load(html);
        let whattodo =  $(".as-wrapper p");
        for(let i = 0 ; i <= whattodo.length-2;i++){
            let what = $(whattodo[i]).text();
            todo.push(what);
        }
        fs.writeFileSync("Todoinlockdown.json",JSON.stringify(todo));
    }
}
