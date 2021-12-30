const maxdiff = 1000000;
const structure ={
    0 : [maxdiff,0],
    1 : [maxdiff,0],
    2 : [maxdiff,0],
    3 : [maxdiff,0],
    4 : [maxdiff,0],
    5 : [maxdiff,0],
    6 : [maxdiff,0],
    7 : [maxdiff,0],
    8 : [maxdiff,0],
    9 : [maxdiff,0],
    10 : [maxdiff,0],
    11 : [maxdiff,0],
    
}
var years = [];
var minmax = new Map();
var ispresent = new Map();
var mn ;
const fun = (e)=>{
   const v = document.getElementById('pageContent');
const len = v.childNodes.length -1;
console.log(len);
for(let i = 2 ; i<len+1 ; i++){
    console.log(v.childNodes[2].class);
    v.removeChild(v.childNodes[2]);
}
const wow = document.createElement('h1');
const textnode = document.createTextNode('hiiiiiiiiiiiiii');
wow.appendChild(textnode);
v.prepend(wow);
mybutton.removeEventListener('click',fun);


// making get request
// formating data
// inserting data to html
// inserting html
 const profileId = getProfileIdFromUrl(window.location.href);

  $.get(`https://codeforces.com/api/user.status?handle=${profileId}`,function(data){
      if(data.status == "OK"){
        initilizedata(data['result']);
        console.log('result',minmax);
      }else{
      
        console.error(data.status + ' : ' + data.comment);
      }
    })
}
function getProfileIdFromUrl(url){
  var arr = url.split("/");
  var temp = arr.slice(-1);
  temp = temp[0].split('?',1);
  return temp;
}

const list = document.getElementsByClassName("second-level-menu-list");
const mybutton = document.createElement('A');
mybutton.style.color='#7a70ff';
mybutton.href = '#sneakipeaki'
let textnode = document.createTextNode('seakipeaki');
mybutton.appendChild(textnode);
mybutton.addEventListener('click',fun);
console.log(mybutton);
const el = document.createElement('LI');
el.appendChild(mybutton);
list[0].append(el);




//intilizing the data

function initilizedata( arr){
    // console.log(arr.lengt);
    for(let i = arr.length-1 ;i>=0;i--){
        //    console.log('idk');
        if(arr[i]['verdict'] == 'OK'){
            // console.log('hooo');
            const d = new Date(arr[i]['creationTimeSeconds']*1000);
            const year = d.getFullYear();
            const month = d.getMonth();
            const difficulty = arr[i]['problem']['rating'];
            // console.log(year,month,difficulty);
             if(ispresent[year] === undefined){
                 ispresent[year]=1;
                 years.push(year);
                 var temp = {...structure};
                 temp[month] =[difficulty,difficulty];
                 minmax.set(year,temp);

                console.group(structure);

             }
             else {

                    const temp = {...minmax.get(year)};
                    const firstv = temp[month][0];
                    const secondv = temp[month][1];
                    temp[month] = [Math.min(difficulty,firstv) , Math.max(difficulty,secondv)];
                    minmax.set(year,temp);
             }
        }
    }
    // console.log("wow");
}