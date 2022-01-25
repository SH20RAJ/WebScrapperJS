
//https://wholly-api.herokuapp.com/get/website-data.php?get_html=https://example.com/

function scrapper(url){
  var baseurl = 'https://wholly-api.herokuapp.com/get/website-data.php?get_html=';
  this.url = url;
  this.gethtml=(url)=>{
    var string = baseurl+''+url;
    csl(string);
    csl(grabber(string));
    return grabber(string);
  }
}

let WebScrapper = new scrapper('https://wholly-api.herokuapp.com/get/website-data.php?get_html=https://example.com/');


function grabber(a,c) {
    var text;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            rpns = this.responseText;
            text = rpns;
        }
    };
    xhttp.open("GET", a, c);
    xhttp.send();
    return text;
}
