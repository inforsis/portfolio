import { CountUp } from './countUp.min.js';

window.onload = function() {
  loadCountNumber();
  loadTimeLine();
  loadPortfolio();
  loadBlogPosts();
  //alert(window.innerWidth);
}

window.changeTimeLine = function(elem,year) {
  axios.get('./json/timeline.json')
  .then(function(response){
    var obj = (response.data);
    for (var i=0;i<obj.length;i++) {
      if (obj[i].year == year) {
        var events = obj[i].events;
        var timeline = '<dt class="year">'+year+'</dt>';
        for (var j=0;j < events.length; j++) {
          timeline += '<dd class="item">'+obj[i].events[j]+'</dd>';  
        }        
        document.getElementById('timeLine').innerHTML = timeline;
      }
    } 
  }); 
}

function loadCountNumber() {
  var workCount = new CountUp('workCount1', 10);
  workCount.start();
  var projectsCount = new CountUp('projectsCount1', 100);
  projectsCount.start();
  var businessCount = new CountUp('businessCount1', 5);
  businessCount.start();
  var codeCount = new CountUp('codeCount1', 15);
  codeCount.start();
  var coffeeCount = new CountUp('coffeeCount1', 0);
  coffeeCount.start();
}

function loadTimeLine() {
  axios.get('./json/timeline.json')
  .then(function(response){
    var obj = (response.data);
    var item = '';
    for (var i=0;i<obj.length;i++) {
      var checked = (i == 0) ? 'checked' : '';
      item += '<label class="item">'+
                    '<input type="radio" onchange="changeTimeLine(this,'+obj[i].year+')" '+checked+' name="timeline" value="'+obj[i].year+'">'+
                    '<i class="bullet"></i>'+
                    obj[i].year+
               '</label>';
    }
    document.getElementById('timeLinePagination').innerHTML = item;
  });
}

window.randomdFunFacts = function() {
  axios.get('./json/funfacts.json')
  .then(function(response){
    var obj = (response.data);
    var id = Math.floor((Math.random() * obj.length) + 1);
    var facts = obj[id].fact;
    document.getElementById('funFacts').innerHTML = facts;
    document.getElementById('funFactID').innerHTML = id;
  }) 
}

function loadPortfolio() {
  axios.get('./json/portfolio.json')
  .then(function(response){
    var obj = (response.data);
    var item = '';
    for (var i=0;i<obj.length;i++) {
      item += '<div class="item">'+
                '<div class="container">'+
                  '<figure class="thumb">';
                    for (var k = 0; k < obj[i].thumbnails.length; k++) {
                      item += '<img src="'+obj[i].thumbnails[k].web+'" class="web" alt="">'+
                              '<img src="'+obj[i].thumbnails[k].mobile+'" class="mobile" alt="">'+
                              '<img src="'+obj[i].thumbnails[k].tablet+'" class="tablet" alt="">';                      
                    }
                  item += '</figure>'+
                  '<div class="content">'+
                    '<h3 class="title">'+
                        obj[i].title+
                    '</h3>'+
                    '<small class="description">'+
                      obj[i].description+
                    '</small>'+
                    '<ul class="listing">';
                      for (var j = 0; j < obj[i].tags.length; j++) {
                        item += '<li class="item">'+
                          obj[i].tags[j]+
                         '</li>';
                      }
                    item += '</ul>';
                    item += '<a href="'+obj[i].link+'?frm=jadson.dev" target="_blank">'+
                      obj[i].link+
                     '</a>'+
                  '</div><!--content-->'+
                '</div><!--container-->'+
              '</div><!--item-->';
    }
    document.getElementById('worksContent').innerHTML = item;
  })
}

function loadBlogPosts() {
  axios.get('./json/articles.json')
  .then(function(response){
    var obj = (response.data);
    var posts = '';
    for (var i = 0; i < obj.length; i++) {
      posts += '<article class="article">'+
                '<h2 class="title">'+
                  '<a href="'+obj[i].link+'" class="link" title="'+obj[i].title+'">'+obj[i].title+'</a>'+
                '</h2>'+
                '<time class="date" datetime="2019-07-06">'+obj[i].date+'</time>'+
              '</article><!--article-->';
    }
    document.getElementById('listingPosts').innerHTML = posts;
  })
}

window.sendMail = function() {
  showLoading();
 
  var emailName =    document.getElementById('emailName');
  var emailAddress = document.getElementById('emailAddress');
  var emailMessage = document.getElementById('emailMessage');
  
  emailName.classList.add('disabled');
  emailAddress.classList.add('disabled');
  emailMessage.classList.add('disabled');
  document.getElementById('btnSend').classList.add('sending');
  document.getElementById('contactStatus').checked = true;
  
  document.getElementById('mainMenu').classList.add('disabled');

  axios.post('./methods/_mail.php', {
    name:    emailName.value,
    email:   emailAddress.value,
    message: emailMessage.value
  }).then(function(response){
    var obj = (response.data);
    if (obj.status == 'success') {
      emailName.value = '';
      emailAddress.value = '';
      emailMessage.value = '';
    }

    document.getElementById('returnContactMsg').innerHTML = obj.msg;
    document.getElementById('returnContactLink').innerHTML = obj.link;
    document.getElementById('contactReturn').classList.add(obj.status);

    hideLoading();

    emailName.classList.remove('disabled');
    emailAddress.classList.remove('disabled');
    emailMessage.classList.remove('disabled');

    document.getElementById('btnSend').classList.remove('sending');

    document.getElementById('mainMenu').classList.remove('disabled');

  })
}

window.showLoading = function() {
  randomdFunFacts();
  document.getElementById('funFactsCard').classList.add('active');
}

window.hideLoading = function() {
  document.getElementById('funFactsCard').classList.remove('active');
}