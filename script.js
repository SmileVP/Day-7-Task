var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
//a)to get the countries from the asia region using filter 

var res=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
console.log(res);

//b)to get the countries with population less than 2lakh using filter
var pop=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
console.log(pop);

//c)to get the name,capital, flag using forEach
result.forEach(ele=>{
    console.log(ele.name);
    console.log(ele.capital);
    console.log(ele.flag);
});

//d)to get the total population of countries using reduce function
var reg=result.map((ele)=>ele.population).reduce((acc,ele)=>acc+ele);
console.log(reg);

//e)to get the country which uses US Dollar as currency
var res=result.filter((ele)=>{for (var i=0;i<ele.currencies.length;i++){
    if(ele.currencies[i].code==="USD"){
         return true;
     }
 }
 });
 console.log(res);

}
