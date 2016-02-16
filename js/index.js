
$(document).ready(function() {

	// Store the quotes
	var Quote = new Array();
	Quote[0] = "Without change there is no innovation, creativity, or incentive for improvement. Those who initiate change will have a better opportunity to manage the change that is inevitable.";
	Quote[1] = "I do not want to get to the end of my life and find that I just lived the length of it. I want to have lived the width of it as well.";
	Quote[2] = "An essential aspect of creativity is not being afraid to fail.";
	Quote[3] = "You teach people how to treat you by what you allow, what you stop, and what you reinforce.";
	Quote[4] = "What seems to us as bitter trials are often blessings in disguise.";
	Quote[5] = "It is not selfish to love yourself, take care of yourself, and to make your happiness a priority.";
	Quote[6] = "Wisdom is merely the movement from fighting life to embracing it.";
	Quote[7] = "Children are happy because they do not have a file in their minds called All the Things That Could Go Wrong.";
	Quote[8] = "Worry is a total waste of time. It does not change anything. All is does it steal your joy and keep you very busy doing nothing.";
	Quote[9] = "Controversy is part of the nature of art and creativity.";

	// Randomly present the quotes
	var randomQuote = Math.floor(Math.random()*Quote.length);
	$('.quote_text').html(Quote[randomQuote]);

	// Store the nicknames
	var Nickname = new Array();
	Nickname[0] = "honey bunches";
	Nickname[1] = "shmookie poo";
	Nickname[2] = "pookie";
	Nickname[3] = " fierce tiger";
	Nickname[4] = "cool person";

	// Randomly present the nicknames
	var randomNickname = Math.floor(Math.random()*Nickname.length);
	$('.nickname').html(Nickname[randomNickname]);

	// Look at the first item of Wired's xml file
	$.get('https://www.wired.com/category/design/feed/', function (data) {
		var firstItem = $(data).find("channel").find("item").first();

	// Pull in the title of Wired's first item
		$(".wiredLink").append(firstItem.find("title").text());

	// Pull in the link of the Wired item
		var href = $(".wiredLink").attr("href");
		$(".wiredLink").attr("href", href + (firstItem.find("link").text()));
    });

});

   	



