$( document ).ready(function() {

	//code for left column with picture and username
	$.ajax({
  	url: 'https://api.github.com/users/kramer20',
  	type:"GET",
  	success: function (myhub) {

      var joined = moment(myhub.created_at).format("MMM D, YYYY");
      var followers = myhub.followers;
      var following = myhub.following;
      var email = myhub.email;
      var login = myhub.login;
      var name = myhub.name;
  		var profile = myhub.avatar_url;
    	$(".rightCol").append('<div class="col-lg-3 col-md-3 contentRight"><div class="picBox"><img class="myProfPic" src="'+profile+'"></div><div class="userInfo"><p class="name">'+name+'</p><p class="login">'+login+'</p><hr><a href="mailto:mkramer2089@gmail.com" class="email">'+email+'</a><p class="joined">Joined on '+joined+'</p><hr><div class="col-lg-4 <a href="https://github.com/kramer20/followers" class="followers">'+followers+' Follower</a><a href="https://github.com/stars" class="starred">0 Starred</a><a href="https://github.com/kramer20/following" class="following">'+following+' Following</a></div></div>');
      }
  	});	

	//code for repositories
	$.ajax({
  	url: 'https://api.github.com/users/kramer20/repos',
  	type:"GET",
  	success: function (repositories) {

    
    var repo = repositories;
    var updated = moment(repositories.updated_at).startOf('hour').fromNow();      
    repo.forEach(function (info) {
      $(".repoSection").append('<div class="col-lg-9 repoLeft"><a href="repositories.html_url" class="repoName">'+info.name+'</a><p class="updated">'+updated+'</p></div><hr><div class="col-lg-3 repoRight"><ul class="repoList"><li class="language">'+info.language+'</li><li class="star">'+info.stargazers_count+'</li><li class="fork">'+info.forks_count+'</li></ul></div><hr>');
    });

  		}
  	});	


  //code for activity tab

    $.ajax({
    url: 'https://api.github.com/users/kramer20/events',
    type:"GET",
    success: function (activities) {
    }
  });
});