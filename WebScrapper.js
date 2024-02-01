/**
 * Integrated with WhollyAPI :- https://wholly-api.herokuapp.com/
 * But Now Shifted to 000webhostapp.com --- https://wholly-api.000webhostapp.com/
 * 
 * Website :- https://sh20raj.github.io/WebScrapperJS/
 * GitHub :- https://github.com/SH20RAJ/WebScrapperJS/
 * Repl :- https://replit.com/@SH20RAJ/WebScrapperJS/
 * 
 * 
 */


function scrapper(url){
  var baseurl = 'https://wholly-api.skinnyrunner.com/get/website-data.php?get_html=';
  this.url = url;
  
  // make a new parser
  this.parser = new DOMParser();
 
  this.get = (a,b,c) => {
    if(b) baseurl='';
    if(!a) a = baseurl+''+url;else a=baseurl+''+a;
    console.log(a);
    var text;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            rpns = this.responseText;
            text = rpns;
        }
    };
    xhttp.open("GET", a,c);
    xhttp.send();
    return text;
}

this.gethtml = (a,b,c)=>{
  return this.parser.parseFromString(this.get(a,b,c), "text/html") ;
}

this.getjson = (a)=>{
  return JSON.parse(this.get(a));
}

this.fetch = (a)=>{
  return this.get(a,true);
}
this.fetchjson = (a)=>{
  return JSON.parse(this.get(a,true));
}
this.fetchhtml = (a)=>{
  return this.parser.parseFromString(WebScrapper.get(a,true), "text/html");
}
this.getparam = (a,e) => { return e||(e=window.location.href),new URL(e).searchParams.get(a)};
this.getRandomInt = (min, max)=>~~(Math.random()*(max-min+1)+min);
//convert html string into DOM
//const document2 = parser.parseFromString(htmlStr, "text/html");

}

let WebScrapper = new scrapper();
