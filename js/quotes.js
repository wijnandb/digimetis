function randomQuote() {
    
		var quoteSource=[
		{
			quote:"It's tough to make predictions, especially about the future.",
            name:"Yogi Berra",
            link:"/aanpak.html"
        },  
        {
			quote:"It's tough to make predictions, especially about the future.",
            name:"Yogi Berra",
            link:"/aanpak.html"
        },
        {
			quote:"It's tough to make predictions, especially about the future.",
            name:"Yogi Berra",
            link:"/aanpak.html"
        },
        {
			quote:"It's tough to make predictions, especially about the future.",
            name:"Yogi Berra",
            link:"/aanpak.html"
        }
            
	];
		

    //getting a new random number to attach to a quote and setting a limit
    var sourceLength = quoteSource.length;
    var randomNumber= Math.floor(Math.random()*sourceLength);
    //set a new quote
    var QuoteText = quoteSource[randomNumber].quote;
    var QuoteAuthor = quoteSource[randomNumber].name;
    var QuoteLink = quoteSource[randomNumber].link;
    //console.log(newQuoteText,newQuoteGenius);

//    document.getElementById("quote").innerHTML = QuoteText;
//    document.getElementById("author").innerHTML = QuoteAuthor;
//    document.getElementById("link").innerHTML = QuoteLink;
    
    document.getElementById("quote").innerHTML = '<p><a href="'+QuoteLink+'">'+QuoteText+'</a> - '+QuoteAuthor+'</p>';

};
