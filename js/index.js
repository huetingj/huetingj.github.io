
$(document).ready(function() {

	// Store the quotes
	var Quote = new Array();
	Quote[0] = "'Without change there is no innovation, creativity, or incentive for improvement. Those who initiate change will have a better opportunity to manage the change that is inevitable.'";
	Quote[1] = "'I do not want to get to the end of my life and find that I just lived the length of it. I want to have lived the width of it as well.'";
	Quote[2] = "'An essential aspect of creativity is not being afraid to fail.'";
	Quote[3] = "'You teach people how to treat you by what you allow, what you stop, and what you reinforce.'";
	Quote[4] = "'What seems to us as bitter trials are often blessings in disguise.'";
	Quote[5] = "'It is not selfish to love yourself, take care of yourself, and to make your happiness a priority.'";
	Quote[6] = "'Wisdom is merely the movement from fighting life to embracing it.'";
	Quote[7] = "'Children are happy because they do not have a file in their minds called All the Things That Could Go Wrong.'";
	Quote[8] = "'Worry is a total waste of time. It does not change anything. All is does it steal your joy and keep you very busy doing nothing.'";
	Quote[9] = "'Controversy is part of the nature of art and creativity.'";

	// Randomly present the quotes
	var randomQuote = Math.floor(Math.random()*Quote.length);
	$('.quote_text').html(Quote[randomQuote]);

	// Store the nicknames
	var Nickname = new Array();
	Nickname[0] = "What it do, boo.";
	Nickname[1] = "I'll tell you what I want, what I really really want.";
	Nickname[2] = "Have fun. Buck up. Live the dream.";
	Nickname[3] = "I'm from the Lou and I'm proud.";
	Nickname[4] = "I'm from the Lou and I'm proud.";

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



	$.get('https://thingsorganizedneatly.tumblr.com/rss', function (data) {
		var firstOrganizedItem = $(data).find("channel").find("item").first().find("description");
		console.log();
    });

	var deed = new Array();
	deed[0] = "be patient and kind to yourself.";
	deed[1] = "TREAT YO SELF.";
	deed[2] = "get some fresh air and go for a walk.";
	deed[3] = "get away from your desk during lunch.";
	deed[4] = "post a thank you note on the Intranet.";
	deed[6] = "write a list of things you are grateful for.";
	deed[7] = "give $20 to someone in need.";
	deed[8] = "compliment a stranger.";
	deed[9] = "ask a coworker to get coffee.";
	deed[10] = "post a compliment to a github issue.";
	deed[11] = "eat mostly vegetables for lunch.";
	deed[12] = "send a friend a message about a childhood memory.";
	deed[13] = "reward yourself.";
	deed[14] = "hide money in the pocket of a coat.";
	deed[15] = "stretch your body.";
	deed[16] = "write down everything on your mind. Take a step back so you can take a fresh look.";
	deed[17] = "send a note to the management team about something they are doing well.";
	deed[18] = "give people the benefit of the doubt.";
	deed[19] = "compliment a coworker.";
	deed[20] = "write a note to your future self.";
	deed[21] = "get some exercise.";
	deed[22] = "go to bed before 10:30pm.";
	deed[23] = "do your work efficiently. Leave work on time.";
	deed[24] = "be on time all day today.";
	deed[25] = "drink eight glasses of water.";
	deed[26] = "encourage somebody.";
	deed[27] = "listen and pay attention completely.";
	deed[28] = "transfer money to your savings account.";
	deed[29] = "be honest. Speak up.";
	deed[30] = "commit to getting a task done.";
	deed[31] = "push the boundaries.";
	deed[32] = "say good morning to someone.";
	deed[33] = "take three deep breaths when you feel frustrated.";
	deed[34] = "listen to a podcast.";

	// Randomly present the nicknames
	var randomDeed = Math.floor(Math.random()*deed.length);
	$('.deed_text').html(deed[randomDeed]);


});



