angular.module("quoteBook")
	.service("dataService", function () {
		
		
		var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];
		this.getData = function () {
			if (localStorage.quotes) {
    		quotes = JSON.parse(localStorage.getItem("quotes"));
  			}
			return quotes;
		};
		
		
		this.addData = function (data) {
			if (data.text && data.author) {
				quotes.unshift(data);
				localStorage.setItem("quotes", JSON.stringify(quotes));
			}
			return quotes;
		};
		
		
		this.removeQuote = function (quoteToRemove) {
		
			if(window.confirm("Are you sure you want to delete this quote?")) {
				
				quotes.splice(quotes.indexOf(quoteToRemove), 1);
				localStorage.setItem("quotes", JSON.stringify(quotes));
				return quotes;
				};
				
			}
			
			
		
		
		
});