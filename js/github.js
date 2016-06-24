$( document ).ready(function() {

	//code for left column with picture and username
	$.ajax({
  	url: 'https://api.github.com/users/kramer20',
  	type:"GET",
  	success: function (myhub) {

  		 var github = myhub.key;

  		 github.forEach(function (profile){
    	$(".rightCol").append('<div class="col-lg-3 col-md-3 contentRight"><div class="picBox"><img class="myProfPic" src="'+profile.avatar_url+'"></div><div class="userInfo"></div></div>');
    	});

  		}
  	});	

	//code for repositories etc.
	$.ajax({
  	url: ' https://api.github.com/users/kramer20/repos',
  	type:"GET",
  	success: function (myhub) {

  		}
  	});	

});