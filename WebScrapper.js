
//https://wholly-api.herokuapp.com/get/website-data.php?get_html=https://example.com/

function scrapper(url){
  var baseurl = 'https://wholly-api.herokuapp.com/get/website-data.php?get_html=';
  this.url = url;
 
  this.gethtml = (a,c) => {
    if(!a) a = baseurl+''+url;else a=baseurl+''+a;
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

}

let WebScrapper = new scrapper();

