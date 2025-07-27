"use strict";
// import apicall from './function.js';  //single function call

import{apicall,API,showData} from'./function.js';

// console.log(API);
// console.log(typeof apicall);

document.querySelectorAll('.links_movie').forEach((aTag)=>{
   
    aTag.addEventListener('click',myfunctions);
})

function myfunctions(ev){
    // console.log(ev);

    ev.preventDefault();
    // console.log(Math.round());
    // console.log(this);
    // console.log(this.getAttribute('for'));

    var type =this.getAttribute('for');
    var apipath = `https://api.themoviedb.org/3/movie/${type}?api_key=${API}&language=en-US&page=1`;

    console.log(apipath);
    apicall(apipath)
    .then(val=>{
        // console.log(val);
        // console.log(val.result);
        showData(val.results);        
    })
        
}

document.getElementById('formData').onsubmit = function(ev){
    ev.preventDefault();
    var data = document.getElementById('search_data').value;
    var apipath = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${data}&page=1`;
    console.log(apipath);  

    apicall(apipath)
    .then(val=>{
        // console.log(val);
        // console.log(val.result);
        showData(val.results);        
    })
}


