import React from 'react';
import News from './myjson/CovidNews.json';

function MyNewz() {
    return (
        <div>
            {News.map((news,index)=>{
                return<>
                <ul>
                    <li>
                    <h2> News - {news.Title}</h2>
                    <p> <h4>Summery</h4> {news.Desciption}</p>
                    <p> Time :- {news['News Time']}</p>
                    <p> Site :- {news['Site Name']}</p>
                    <a href={news.Go_To_Link}> Go_To_Site </a>
                    </li>
                </ul>
                    
                </>
            })}
        </div>
    )
};

export default MyNewz;
