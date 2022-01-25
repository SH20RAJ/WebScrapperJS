# WebScrapperJS
WebScrapperJS - Get Content/HTML of any website without being blocked by CORS even using JavaScript by WhollyAPI 

---

## Intialise WebScrapper
```javascript
let MyWebScrapper = new scrapper();
```
## To Get HTML Content
```javascript
var url = 'https://google.com/';
var html = MyWebScrapper.gethtml(url);//html of the url will be stored in this variable
console.log(html);
```