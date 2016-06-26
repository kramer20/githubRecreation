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
      var bio = myhub.bio;
  		var profile = myhub.avatar_url;
    	$(".leftCol").append('<div class="col-lg-4 col-md-4 contentLeft"><div class="picBox"><a href="https://github.com/settings/profile"><img class="myProfPic" src="'+profile+'"></a></div><div class="userInfo"><p class="name">'+name+'</p><p class="login">'+login+'</p><p class="bio">'+bio+'</p><hr class="bioLine"><a href="mailto:mkramer2089@gmail.com" class="email"><img src="images/mail.svg" class="mail">'+email+'</a><p class="joined"><img src="images/clock.svg" class="clock">Joined on '+joined+'</p><hr class="emailLine"><ul class="numberCol"><li class="followers One"><a href="https://github.com/kramer20/followers" class="followers">'+followers+'</a></li><li class="starred One"><a href="https://github.com/stars" class="starred">0</a></li><li class="following One"><a href="https://github.com/kramer20/following" class="following">'+following+'</a></li></ul><ul class="wordCol"><li class="followers Two"><a href="https://github.com/kramer20/followers" class="followersText">Followers</a></li><li class="starred Two"><a href="https://github.com/stars" class="starredText">Starred</a></li><li class="following Two"><a href="https://github.com/kramer20/following" class="followingText">Following</a></li></ul><hr class="bottomLine"></div></div>');
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
      $(".repoSection").append('<div class="col-lg-8 repoLeft"><a href="info.html_url" class="repoName">'+info.name+'</a><p class="updated">Updated '+updated+'</p><hr class="repoBorder"></div><div class="col-lg-4 repoRight"><ul class="repoList"><li class="language">'+info.language+'</li><li class="star"><a href="info.stargazers_url" class="starLink"><img src="images/star.svg" class="starPic">'+info.stargazers_count+'</a></li><li class="fork"><a href="info.forks_url" class="forksLink"><img src="images/git-branch.svg" class="branch">'+info.forks_count+'</a></li></ul></div>');
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