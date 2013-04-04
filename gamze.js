var timer;
$(document).ready(function() { 
	$('#submit').click(tweet);  
	$('input:radio[name=time]').click(function() {
		clearInterval(timer);
		var val = $('input:radio[name=time]:checked').val();
		timer = setInterval(function(){ 
				tweet();
			},parseInt(val)*1000);
	});
	function tweet () {
		$("#tweet_result").text("TWEETS:");
		var searchKey =  document.getElementById('text').value;
		var number = document.getElementById('text2').value;
		$.ajax({
			type : "GET",
			dataType : "json",
			url : "http://search.twitter.com/search.json?q="
			+ searchKey + "&rpp=" + number + "&result_type=recent&callback=?",
			success : function(data) {
			for (var i=0;i<=number;i++)
			{
$("#tweet_result").append('<div class="dis"><div class="birinci"><ol type="i"><li> <a target="_blank" href="http://twitter.com/'+data.results[i]['from_user']+'"><img src="'+ data.results[i]['profile_image_url']+'"width="100%" height="99%"/></a></div><div class="ikinci"><div class=twtname><b>'+data.results[i]['from_user_name'] + '</b></div><b> @' + data.results[i]['from_user'] + '</b><b> (</b><b>'+ data.results[i]['created_at'] + '</b><b>)</br></b><div class="twt"><b>' + data.results[i]['text'] + '</b></div></li></br></ol></div></div>');			}}
		});
	}

 });
