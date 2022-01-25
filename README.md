# WebScrapperJS
WebScrapperJS - Get Content/HTML of any website without being blocked by CORS even using JavaScript by WhollyAPI 

---
<center>
Website :- <a href="https://sh20raj.github.io/WebScrapperJS/"> https://sh20raj.github.io/WebScrapperJS/ </a> 

<a href="https://github.com/SH20RAJ/WebScrapperJS/">GitHub</a>  | <a href="https://replit.com/@SH20RAJ/WebScrapperJS/">Repl.it</a>

</center>

---

## Grab the CDN or Download the JavaScript File

```html
<script src="https://cdn.jsdelivr.net/gh/SH20RAJ/WebScrapperJS/WebScrapper.min.js" ></script>
```
---

## To Get HTML Content of Any Website
```javascript
var url = 'https://google.com/';
var html = WebScrapper.gethtml(url);//html of the url will be stored in this variable
console.log(html);
```

## Intialise own WebScrapper with URL
```javascript
let MyWebScrapper = new scrapper('https://example.com/');
//You can now directly call gethtml() instead of passing a url into it.

console.log(MyWebScrapper.gethtml()); //Grab https://example.com/ and print on console

```
Still you can Use new created scrapper `MyWebScrapper` for grabbing new URLs. Like
```javascript
let MyWebScrapper = new scrapper('https://example.com/');
//You can now directly call gethtml() instead of passing a url into it.

console.log(MyWebScrapper.gethtml()); //Grab https://example.com/ and print on console

console.log(MyWebScrapper.gethtml('https://example.com/')); //Grab https://youtube.com/ and print on console

```
