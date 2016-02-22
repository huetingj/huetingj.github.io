
$(document).ready(function() {

	$('#new_intention').on('submit', addNewItem);

	function addNewItem(event) {
	
	// Prevent page reload
	event.preventDefault();
	
	// Get the text the user entered
	var newItem = $('#newItem').val();

	// window.location.assign("intention.html"); 

		// Add an <li> with that text to the <ul>
	$('#todo').append(newItem);

	$(this).hide(); 
}


//	$( "#intention_form" ).submit(function( event ) {
 // alert( "message" );
 // event.preventDefault();
// });
	
	// Prevent page reload
	// event.preventDefault();
	
	// Get the text the user entered
	// var newIntention = $('#your_intention').val();
	
	// Add an <li> with that text to the <ul>
	// $('#show_intention').append(newIntention);


	// Store the quotes
	var Quote = new Array();
	Quote[0] = '"Without change there is no innovation, creativity, or incentive for improvement. Those who initiate change will have a better opportunity to manage the change that is inevitable." - William Pollard';
	Quote[1] = '"Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they did not really do it, they just saw something. It seemed obvious to them after a while. That is because they were able to connect experiences they have had and synthesize new things." - Steve Jobs';
	Quote[2] = '"Creativity is the process of having original ideas that have value. It is a process. It is not random." - Ken Robinson';
	Quote[3] = '"The difference between science and the arts is not that they are different sides of the same coin even, or even different parts of the same continuum, but rather, they are manifestations of the same thing. The arts and sciences are avatars of human creativity." - Mae Jemison';
	Quote[4] = '"Passion is one great force that unleashes creativity, because if you are passionate about something, then you are more willing to take risks." - Yo-Yo Ma';
	Quote[5] = '"Creativity is a habit, and the best creativity is the result of good work habits." - Twyla Tharp';
	Quote[6] = '"Everything that is created comes out of silence. Your thoughts emerge from the nothingness of silence. Your words come out of this void. Your very essence emerged from emptiness. All creativity requires some stillness." - Wayne Dyer';
	Quote[7] = '"Children are happy because they do not have a file in their minds called All the Things That Could Go Wrong."';
	Quote[8] = '"I believe this passionately: that we do not grow into creativity, we grow out of it. Or rather, we get educated out if it." - Ken Robinson';
	Quote[9] = '"Creativity is a spark. It can be excruciating when we are rubbing two rocks together and getting nothing. And it can be intensely satisfying when the flame catches and a new idea sweeps around the world." - Jonah Lehrer';

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


	var backgroundImage = new Array();
	backgroundImage[0] = 'url(images/dino.jpg)';
	backgroundImage[1] = 'url(images/dino_1.jpg)';
	backgroundImage[2] = 'url(images/dino_2.jpg)';
	backgroundImage[3] = 'url(images/dino_3.jpg)';
	backgroundImage[4] = 'url(images/dino_4.jpg)';
	backgroundImage[5] = 'url(images/dog_1.jpg)';

	// Randomly present the nicknames
	var randomBackgroundImage = Math.floor(Math.random()*backgroundImage.length);
	$('#hello').css('background' , backgroundImage[randomBackgroundImage]);


	// Look at the first item of Wired's xml file
	$.get('https://www.wired.com/category/design/feed/', function (data) {
		var firstItemWiredOne = $(data).find("channel").find("item").first();

	// Pull in the title of Wired's first item
		$(".wiredLinkOne").append(firstItemWiredOne.find("title").text());

	// Pull in the link of the Wired item
		var hrefWiredOne = $(".wiredLinkOne").attr("href");
		$(".wiredLinkOne").attr("href", hrefWiredOne + (firstItemWiredOne.find("link").text()));
    });

		// Look at the first item of Wired's xml file
	$.get('http://www.wired.com/category/gear/feed/', function (data) {
		var firstItemWiredTwo = $(data).find("channel").find("item").first();

	// Pull in the title of Wired's first item
		$(".wiredLinkTwo").append(firstItemWiredTwo.find("title").text());

	// Pull in the link of the Wired item
		var hrefWiredTwo = $(".wiredLinkTwo").attr("href");
		$(".wiredLinkTwo").attr("href", hrefWiredTwo + (firstItemWiredTwo.find("link").text()));
    });

		// Look at the first item of Wired's xml file
	$.get('http://www.wired.com/category/photo/feed/', function (data) {
		var firstItemWiredThree = $(data).find("channel").find("item").first();

	// Pull in the title of Wired's first item
		$(".wiredLinkThree").append(firstItemWiredThree.find("title").text());

	// Pull in the link of the Wired item
		var hrefWiredThree = $(".wiredLinkThree").attr("href");
		$(".wiredLinkThree").attr("href", hrefWiredThree + (firstItemWiredThree.find("link").text()));
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



    /* Every time the window is scrolled ... */
    $(window).scroll( function() {

       /* Every time the window is scrolled ... */
    	$(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fade2').each( function(i){
            
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 3.0);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
	    
	});






});



