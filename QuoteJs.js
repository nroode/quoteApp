

    
$(getQuote);

$('#button').on('click', getQuote);



function getQuote() {
    quoteUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    
    $.getJSON(quoteUrl, function (response) {
        
       
        $('#quote').html(response.quoteText);

        $('#author').html(response.quoteAuthor);

    });
};


$('.twitter-share-button').on('click', function() {
    var tweetQuote = $('#quoteText').text();
    window.open("https://twitter.com/intent/tweet?text=" + tweetQuote);
});

