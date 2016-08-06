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
  // $("form").on("submit",function(e){
  // e.preventDefault();

  //   var search = $("#search").val();
    
  //   $("#search").val("");

	$.ajax({
  	url: 'https://api.github.com/users/kramer20/repos',
  	type:"GET",
  	success: function (repositories) {

    var repo = repositories;
    // var dates = [];
    // dates.sort();

    // dates.forEach(function (order){
    //   order = info.created_at(order);
    // });

    repo.forEach(function (info) {
      var repoNameLink = info.html_url;
      var updated = moment(info.created_at).startOf('hour').fromNow();
      $(".repoSection").append('<div class="col-lg-8 repoLeft"><a href="'+repoNameLink+'" class="repoName">'+info.name+'</a><p class="description">'+info.description+'</p><p class="updated">Updated '+updated+'</p><hr class="repoBorder"></div><div class="col-lg-4 repoRight"><ul class="repoList"><li class="language">'+info.language+'</li><li class="star"><a href="info.stargazers_url" class="starLink"><img src="images/star.svg" class="starPic">'+info.stargazers_count+'</a></li><li class="fork"><a href="info.forks_url" class="forksLink"><img src="images/git-branch.svg" class="branch">'+info.forks_count+'</a></li></ul></div>');
    });

  		}
  // });	
});


  //code for push

    $.ajax({
    url: 'https://api.github.com/users/kramer20/events',
    type:"GET",
    success: function (activities) {

      var active = activities;

      active.forEach(function (push) {

      if(push.type === "PushEvent" )
      {
        var login = push.actor.login;
        var master = push.payload.ref;
        var repoName = push.repo.name;
        var url = push.repo.url;
        var image = push.actor.avatar_url;
        var linkUrl = push.payload.commits;
        linkUrl = buildLink(linkUrl);
        var commitNum = push.payload.commits;
        commitNum = buildCommits(commitNum);
        var commitMsg = push.payload.commits;
        commitMsg = buildMessage(commitMsg);
        var current = moment(push.created_at).fromNow(); 
         var login = push.actor.login;
        var repoName = push.repo.name;
        //var current = moment(push.created_at).startOf('hour').fromNow();

        $(".activeSection").append('<div class="pushInfo col-lg-1"><img src="images/git-commit.svg" class="commitIcon"></div><div class="col-lg-11 details"><div class="time">'+current+'</div><div class="action"><a href="https://github.com/kramer20">'+login+'</a> pushed to <a href="https://github.com/kramer20/githubRecreation/tree/master" class="master">master</a> at <a href="url" class="pushLink">'+repoName+'</a></div><ul class="commitName"><li><img src="'+image+'" class="smallImg"></li><li><img class="octoKitty" src="images/mark-github.svg"></li><li><a href="linkUrl">'+commitNum+'</a></li><li>'+commitMsg+'</li></ul><hr class="pushLine"></div>');
      
       }

      else if (push.type === "branch") {
        $(".activeSection").append('<div class="branch"><img src = "images/git-branch.svg"><a href="https://github.com/">'+login+'</a> created branch <a href="https://github.com/kramer20/githubRecreation/tree/master" class="master">master</a> at <a href="url" class="pushLink">'+repoName+'</a></div><div class="time">'+current+'</div></div>');
        }
      });

    }
  });

  function buildLink(links){
    var linkString = "";
    links.forEach(function(link){
      linkString += `<p>${link.url}</p>`;
    });
    return linkString;
  }    

 function buildCommits(commits){
        var commitString = "";
        commits.forEach(function(commit){
            commitString += commit.sha;
            newString = commitString.substring(0,7);
            
        });
        return newString;
      };

  function buildMessage(messages){
      var bigString = "";
      messages.forEach(function(message){
      bigString += `<p>${message.message}</p>`;
    });

  return bigString;
}  

    

});



