async function apicall(apipath){
    var res = await fetch(apipath);
    var ans = await res.json();
    return ans;
}
const API = 'f6866ecb64af726c47ad422d7b08e283';
const IMGURL = 'https://image.tmdb.org/t/p/w500';

// export default apicall; for single

const showData = function(answer){
    console.log(answer);

    document.querySelector('.all_results').innerHTML = '';

    answer && answer.length>0 && answer.forEach(val=>{

        console.log(val);

        var {original_title,poster_path} = val;
        console.log(original_title,poster_path);

        var divTag = document.createElement('div');
        var imgTag = document.createElement('img');
        var pTag = document.createElement('p');

        imgTag.setAttribute('src',IMGURL+poster_path);
        // console.log(IMGURL+poster_path);
        

        imgTag.className = 'img-fluid';

        pTag.innerText = original_title;

        divTag.className = 'col-xl-3 col-6 text-center';

        divTag.append(imgTag,pTag)
        document.querySelector('.all_results').append(divTag);
        
    })    
}

export {
    apicall,
    API,
    showData
    // showData as default function for multiple usages
 }
