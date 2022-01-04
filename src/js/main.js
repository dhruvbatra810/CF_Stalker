const days31=[[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],[0,new Set() , new Map()],];
const maxdiff = 1000000;
let minyear=Infinity;// value that will get using select tag
function updateminyear(){
  minyear = parseInt(this.value);
  //console.log(minyear);
  //calling to function 
  mainmakingcharts();
}
var valueformonth =1;  // ..............................
function upddatevalueformonth(){
  valueformonth = parseInt(this.value);
  //console.log(valueformonth);
  // calling to function
  mainmakingcharts();
}
var valueforday=1;  // .................................
function updatevalueforday(){
  valueforday = parseInt(this.value);
  //console.log(valueforday);
  //calling to function;
  mainmakingcharts();
}

const structure ={
    0 : [maxdiff,0,new Map(),[...days31]],
    1 : [maxdiff,0,new Map(),[...days31]],
    2 : [maxdiff,0,new Map(),[...days31]],
    3 : [maxdiff,0,new Map(),[...days31]],
    4 : [maxdiff,0,new Map(),[...days31]],
    5 : [maxdiff,0,new Map(),[...days31]],
    6 : [maxdiff,0,new Map(),[...days31]],
    7 : [maxdiff,0,new Map(),[...days31]],
    8 : [maxdiff,0,new Map(),[...days31]],
    9 : [maxdiff,0,new Map(),[...days31]],
    10 : [maxdiff,0,new Map(),[...days31]],
    11 : [maxdiff,0,new Map(),[...days31]],
}
var days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var months=[1,2,3,4,5,6,7,8,9,10,11,12];
var yearss=[];
var years = [];
var minmax = new Map();
var ispresent = new Map();
var mn ;
const fun = (e)=>{
const v = document.getElementById('pageContent');
const len = v.childNodes.length -1;
//console.log(len);
for(let i = 2 ; i<len+1 ; i++){
    //console.log(v.childNodes[2].class);
    v.removeChild(v.childNodes[2]);
}

 yearss=[];
 years = [];
 minmax = new Map();
 ispresent = new Map();
mainthing();


// making get request
// formating data
// inserting data to html
// inserting html


}
function mainthing(){

  

 chrome.runtime.sendMessage({todo:"appendHTML"},function(response){
    $('#pageContent').append(response.htmlResponse);
      const profileId = getProfileIdFromUrl(window.location.href);
      // const getthing = document.getElementById('selectyear');
      // const element = document.createElement('h1');
      // element.addEventListener('click',function(e){
      //   element.style.color = 'red';
      // })
      // const createnode = document.createTextNode('wowowowowowow');
      // element.append(createnode);
      // getthing.append(element);
  $.get(`https://codeforces.com/api/user.status?handle=${profileId}`,function(data){
      if(data.status == "OK"){
        initilizedata(data['result']);
        //console.log('result',minmax);
        if(minyear === Infinity)
         {
                const getthing = document.getElementById('ifnotpresent');
      const element = document.createElement('h1');
      const createnode = document.createTextNode('nothing to show here, go solve a problem');
      element.append(createnode);
      getthing.append(element);
         }
         else{
           fillyearss();
           makeselecttags('foryear' , yearss, updateminyear );
           makeselecttags('formonth',months , upddatevalueformonth);
           makeselecttags('forday' , days, updatevalueforday);
           console.log(minmax);  
          mainmakingcharts();


         }
      }else{
      
        console.error(data.status + ' : ' + data.comment);
      }
    })
  })
 
}

function fillyearss(){
  for(const[key,value] of minmax.entries(minmax)){
    yearss.push(key);
  }
  //console.log(yearss);
}



function makeselecttags(where,arr,fun){
const insertin = document.getElementById(where);
const selectt = document.createElement('select');
selectt.addEventListener('change',fun);
 for(var key = 0;key<arr.length;key++){
   const v = document.createElement('option');
   const att= document.createAttribute('value');
   const tn = document.createTextNode(`${arr[key]}`);
   v.append(tn);
   att.value = `${arr[key]}`;
   v.setAttributeNode(att);
   selectt.appendChild(v);
 }
 insertin.append(selectt);


}
function getProfileIdFromUrl(url){
  var arr = url.split("/");
  var temp = arr.slice(-1);
  temp = temp[0].split('?',1);
  return temp;
}

const list = document.getElementsByClassName("second-level-menu-list");
const mybutton = document.createElement('A');
mybutton.style.color='#ff0000';
mybutton.href = '#sneakipeaki'
let textnode = document.createTextNode('sneakpeek');
mybutton.appendChild(textnode);
mybutton.addEventListener('click',fun);
//console.log(mybutton);
const el = document.createElement('LI');
el.appendChild(mybutton);
list[0].append(el);




//intilizing the data

function initilizedata( arr){
    // //console.log(arr.lengt);
    for(let i = arr.length-1 ;i>=0;i--){
        //    //console.log('idk');
        if(arr[i]['verdict'] == 'OK'){
            // //console.log('hooo');
            const d = new Date(arr[i]['creationTimeSeconds']*1000);
            const year = d.getFullYear();
            const month = d.getMonth();
            const date = d.getDate();
            const difficulty = arr[i]['problem']['rating'];
            const tags = arr[i]['problem']['tags'];
            const problemid = arr[i]['problem']['contestId'];
            const index =  arr[i]['problem']['index'];
            if (isNaN(difficulty))
              continue;
            
             if(ispresent[year] === undefined){
                 minyear = Math.min(minyear,year);
                 //console.log(typeof year);
                 ispresent[year]=1;
                 years.push(year);
                 var temp = {...structure};
                //  const value = new Set([...temp[month][2]]);
                //  tags.map((e)=>{
                //     value.add(e);
                //  })
                const value = new Map(temp[month][2]);
              
                  const temp2 = [...temp[month][3]];
                 const storingproblems = new Set(temp2[date-1][1]);
                 const tagsonday = new Map(temp2[date-1][2]);
                 storingproblems.add( makeproblemlink(problemid,index));
                //  //console.log(storingproblems)
                  tags.map((e)=>{
                  value.set(e , (value.get(e) === undefined ?1: value.get(e)+1));
                  tagsonday.set(e, (tagsonday.get(e) === undefined ?1: tagsonday.get(e)+1));
                })
                 temp2[date-1] = [temp2[date-1][0]+1 , storingproblems,tagsonday];
                 //console.log(year,temp2);
                 temp[month] =[difficulty,difficulty,value,temp2];
    
                 minmax.set(year,temp);

             }
             else {

                    const temp = {...minmax.get(year)};
                    const firstv = temp[month][0];
                    const secondv = temp[month][1];
                //     const value = new Set([...temp[month][2]]);
                //     tags.map((e)=>{
                //     value.add(e);
                //  })
                 const value = new Map(temp[month][2]);
              
                    const temp2 = [...temp[month][3]];
                 const storingproblems = new Set(temp2[date-1][1]);
                  const tagsonday = new Map(temp2[date-1][2]);
                 storingproblems.add( makeproblemlink(problemid,index));
                   tags.map((e)=>{
                  value.set(e , (value.get(e) === undefined ?1: value.get(e)+1));
                  tagsonday.set(e, (tagsonday.get(e) === undefined ?1: tagsonday.get(e)+1));
                })
                 temp2[date-1] = [temp2[date-1][0]+1 , storingproblems,tagsonday];

                    temp[month] = [Math.min(difficulty,firstv) , Math.max(difficulty,secondv),value,temp2];
                   
                    minmax.set(year,temp);
             }
        }
    }
    // //console.log("wow");
}
function makeproblemlink(contestId,index){
  if(contestId && contestId.toString().length<=4){
    return `https://codeforces.com/problemset/problem/${contestId}/${index}`;
  }else{
    return `https://codeforces.com/problemset/gymProblem/${contestId}/${index}`;
  }
}




function mainmakingcharts(){

 displaydate();
  //  making data for 1st chart, dataset and tooltip
 var datasetforchart1= createdatasetfor1stchart();
 var tooltipfordatasetforchart1 = createtooltipforchart1();
 //console.log(datasetforchart1);
 //console.log(tooltipfordatasetforchart1);
 // 1st chart
 makechart1(datasetforchart1,tooltipfordatasetforchart1);
 // making data for 2nd chart ,dataset = count  ,tooltip
 var datasetforchar2 = createdatasetfor2stchart();   
 var tooltipfordatasetforchart2 =  createtooltipforchart2();
 //console.log(datasetforchar2);
  //console.log(tooltipfordatasetforchart2);
  //2nd chart
 makechart2(datasetforchar2,tooltipfordatasetforchart2);
 //data for solve on that day problem
  const v = solvedonthatday();
  //console.log(v);
  //showing the values of problem solved on that day;
  ShowProblemsSolvedOnThatDay(v);

}
function displaydate(){
  let v = document.getElementById('showingyearno');
  let len = v.childNodes.length;
  for(let i = 0 ; i<len; i++){
      v.removeChild(v.childNodes[i]);
  }
  v.append(minyear);

     v = document.getElementById('showingmonthno');
   len = v.childNodes.length;
  for(let i = 0 ; i<len; i++){
      v.removeChild(v.childNodes[i]);
  }
  v.append(valueformonth);

     v = document.getElementById('showingdayno');
   len = v.childNodes.length;
  for(let i = 0 ; i<len; i++){
      v.removeChild(v.childNodes[i]);
  }
 v.append(valueforday);

}
function ShowProblemsSolvedOnThatDay(arr){

  const v = document.getElementById('solvedonthatday');
const len = v.childNodes.length;

for(let i = 0 ; i<len; i++){
    v.removeChild(v.childNodes[i]);
}
    const getid = document.getElementById('solvedonthatday');
    const span = document.createElement('span');
    for(let i = 0 ;i<arr.length;i++){
      const a = document.createElement('a');
      // const href = document.createAttribute('target');
      // href.value =  arr[i];
      a.href=arr[i];
      a.target='_blank';
      a.style.textDecoration='none';

      const tn = document.createTextNode(`  problem${i+1} `);
      a.appendChild(tn);
      span.append(a);
    }
    getid.append(span);


}
function solvedonthatday(){
  const v = minmax.get(minyear);
  const month  = v[valueformonth-1];
  const fourthvalue = month[3];
  const particularday = fourthvalue[valueforday-1];
  const ans =[];
  //console.log(fourthvalue);
  for(let value of particularday[1]){
    ans.push(value);
  }
  return ans;


}

function makechart2(dataset,tooltip){

  let charstatus = Chart.getChart("everymonth");
  if(charstatus != undefined)
  charstatus.destroy();
  var ctx = document.getElementById("everymonth").getContext("2d");
 var data={
  labels : days,
  datasets:dataset
 }
 //console.log(data);
 const titleTooltip = (tooltipItems) =>{
                return  tooltip[parseInt(tooltipItems[0].label) -1];
            }

         var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: data,
                options: {
                    barValueSpacing: 20,
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                            }
                        }]
                    },
                    plugins:{
                        tooltip:{
                            yAlign:'bottom',
                            displayColors: false,
                            callbacks:{
                                title: titleTooltip
                            }

                        }
                    }
                }
            });    



}
function createtooltipforchart2(){
  const v = minmax.get(minyear);
  const month = v[valueformonth-1];
  const vv = month[3];
  const ans=[];
  
  for(let i = 0 ;i<31;i++){
     const arr=  vv[i][2];
      var arrayofstrings=[];
    var s='';
    let j=0;
    for(const [key,value] of arr.entries(arr)){
      if(j === 4){
        j=0;
        arrayofstrings.push(s);
        s='';
      }
      s =s  + key + ': '+ value+', ';

      j++;
    }
    arrayofstrings.push(s);
    ans.push(arrayofstrings);
  }
  //console.log(ans);
  return ans;
  
}
function createdatasetfor2stchart(){
 const v = minmax.get(minyear);
 const month  = v[valueformonth-1];
 const vv = month[3];
 //console.log(vv);
 const arrrr=[];
 const arrrrcolor=[];
 for(let i = 0 ;i<31;i++){
  arrrr.push(vv[i][0]);
  arrrrcolor.push('#A594F9');
 }
//  //console.log(arrrr);


 return [ 
     {
       label:"count of problem solved on each day",
       backgroundColor :arrrrcolor,
       data:arrrr
  } ];


}


function makechart1(dataset, tooltip){
  let charstatus = Chart.getChart("everyyear");
  if(charstatus != undefined)
  charstatus.destroy();
  var ctx = document.getElementById("everyyear").getContext("2d");
 var data={
  labels : months,
  datasets:dataset
 }
 //console.log(data);
 const titleTooltip = (tooltipItems) =>{
                return  tooltip[parseInt(tooltipItems[0].label) -1];
            }

         var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: data,
                options: {
                    barValueSpacing: 20,
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                            }
                        }]
                    },
                    plugins:{
                        tooltip:{
                            yAlign:'bottom',
                            displayColors: false,
                            callbacks:{
                                title: titleTooltip
                            }

                        }
                    }
                }
            });    


}


function createtooltipforchart1(){
   var v  = minmax.get(minyear);

   var ans=[];
   for(let i = 0 ;i<12;i++){
    let arr= v[i][2];
    var arrayofstrings=[];
    var s='';
    let j=0;
    for(const [key,value] of arr.entries(arr)){
      if(j === 4){
        j=0;
        arrayofstrings.push(s);
        s='';
      }
      s =s  + key + ': '+ value+', ';

      j++;
    }
    arrayofstrings.push(s);
    ans.push(arrayofstrings);

   }
   return ans; 


}
function createdatasetfor1stchart(){
   var v  = minmax.get(minyear);
  //  //console.log(minmax.get(minyear));
   var minarr=[],maxarr=[];
   var minarrcolor=[],maxarrcolor=[];
   for(let i = 0 ;i<12;i++){
     minarr.push((v[i][0] === 1000000?0:v[i][0]));
     minarrcolor.push('#E980FC');
     maxarr.push(v[i][1]);
     maxarrcolor.push('#DABFFF');
   }
   //console.log('www');
   return [ 
     {
       label:"lowest rating problem solved",
       backgroundColor :minarrcolor,
       data:minarr
  } , 
  { 
    label:"highest rating problem solved",
    backgroundColor: maxarrcolor,
    data:maxarr
  } ];
}