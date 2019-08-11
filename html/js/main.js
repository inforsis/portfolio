import { CountUp } from './countUp.min.js';

window.onload = function() {
  loadCoverArea();
  //alert(window.innerWidth);
}

window.navMainMenu = function(item) {
  var active = document.getElementsByClassName('main-menu-item active');
    [].forEach.call(active, function(el) {
    el.classList.remove("active");
  });
  document.getElementById(item).classList.add('active');
}

window.changeTimeLine = function(elem,year) {
  axios.get('./json/timeline.json')
  .then(function(response){
    var obj = (response.data);
    var timeline = document.getElementById('timeLine');
    timeline.innerHTML = '';
    for (let i=0;i<obj.length;i++) {
      if (obj[i].year == year) {
        let events = obj[i].events;
        let dt = document.createElement("DT");
        dt.classList.add("year");
        dt.innerHTML = obj[i].year;
        timeline.appendChild(dt);
        for (let j=0;j < events.length; j++) { 
          let dd = document.createElement('DD');
          dd.classList.add('item');
          dd.innerHTML = obj[i].events[j];
          timeline.appendChild(dd);
        }        
      }
    } 
  }); 
}

window.loadCountNumber = function() {
  let workCount = new CountUp('workCount1', 10);
  workCount.start();
  let projectsCount = new CountUp('projectsCount1', 100);
  projectsCount.start();
  let businessCount = new CountUp('businessCount1', 5);
  businessCount.start();
  let codeCount = new CountUp('codeCount1', 15);
  codeCount.start();
  let coffeeCount = new CountUp('coffeeCount1', 0);
  coffeeCount.start();
}

window.loadTimeLine = function() {
  axios.get('./json/timeline.json')
  .then(function(response){
    var obj = (response.data);
    var timeLinePagination = document.getElementById('timeLinePagination');
    timeLinePagination.innerHTML = '';
    for (var i=0;i<obj.length;i++) {      
      
      let label = document.createElement('LABEL');
      label.classList.add('item');
      
      let input = document.createElement('INPUT');
      input.setAttribute('type','radio');
      input.setAttribute('name','timeline');
      input.setAttribute('value',obj[i].year);
      input.setAttribute('onchange','changeTimeLine(this,'+obj[i].year+')');
      
      label.appendChild(input);

      let bullet = document.createElement('I');
      bullet.classList.add('bullet');
      label.appendChild(bullet);

      let yearTxt = document.createElement('SPAN');
      yearTxt.innerHTML = obj[i].year;
      label.appendChild(yearTxt);

      timeLinePagination.appendChild(label);

      if (i == 0)
          input.click();
    }
  });
}

window.randomdFunFacts = function() {
  axios.get('./json/funfacts.json')
  .then(function(response){
    var obj = (response.data);
    var id = Math.floor((Math.random() * obj.length) + 1);
    var factsHTML = obj[id].fact;
    document.getElementById('funFacts').innerHTML = factsHTML;
    document.getElementById('funFactID').innerHTML = id;
  }) 
}

window.loadPortfolio = function() {
  axios.get('./json/portfolio.json')
  .then(function(response){
    var obj = (response.data);
    var worksContent = document.getElementById('worksContent');
    worksContent.innerHTML = '';
    for (var i=0;i<obj.length;i++) {
      var item = document.createElement('DIV');
      item.classList.add('item');

      var container = document.createElement('DIV');
      container.classList.add('container');

      var thumb = document.createElement('FIGURE');
      thumb.classList.add('thumb');
      for (var k = 0; k < obj[i].thumbnails.length; k++) {
        let web = document.createElement('IMG');
        web.classList.add('web');
        web.setAttribute('src',obj[i].thumbnails[k].web);
        web.setAttribute('alt','portfolio thumbnail');

        let mobile = document.createElement('IMG');
        mobile.classList.add('mobile');
        mobile.setAttribute('src',obj[i].thumbnails[k].mobile);
        mobile.setAttribute('alt','portfolio thumbnail');

        let tablet = document.createElement('IMG');
        tablet.classList.add('tablet');
        tablet.setAttribute('src',obj[i].thumbnails[k].tablet);
        tablet.setAttribute('alt','portfolio thumbnail');

        thumb.appendChild(web);
        thumb.appendChild(mobile);
        thumb.appendChild(tablet);

      }
      container.appendChild(thumb);

      var content = document.createElement('DIV');
      content.classList.add('content');

      var title = document.createElement('H3');
      title.classList.add('title');
      title.innerHTML = obj[i].title;
      content.appendChild(title);
      
      var description = document.createElement('SMALL');
      description.classList.add('description');
      description.innerHTML = obj[i].description;
      content.appendChild(description);

      var tags = document.createElement('UL');
      tags.classList.add('listing');
      
      for (let j = 0; j < obj[i].tags.length; j++) {
        let tag = document.createElement('LI');
        tag.classList.add('item');
        tag.innerHTML = obj[i].tags[j];
        tags.appendChild(tag);
      }
      content.appendChild(tags);
      
      var link = document.createElement('A');
      link.setAttribute('href',obj[i].link+'?frm=jadson.dev');
      link.setAttribute('target','_blank');
      link.innerHTML = obj[i].link;
      content.appendChild(link);

      item.appendChild(content);

      container.appendChild(content);
      item.appendChild(container);

      worksContent.appendChild(item);
    }
    loadStatistics();
  })
}

window.loadBlogPosts = function() {
  axios.get('./json/articles.json')
  .then(function(response){
    var obj = (response.data);
    var post = document.getElementById('listingPosts');
    post.innerHTML = '';
    for (var i = 0; i < obj.length; i++) {
      var article = document.createElement('ARTICLE');
      article.classList.add('article');

      let title = document.createElement('H2');
      title.classList.add('title');

      let link = document.createElement('A');
      link.setAttribute('href',obj[i].link);
      link.classList.add('link');
      link.setAttribute('title',obj[i].title);
      link.innerHTML = obj[i].title;

      title.appendChild(link);

      article.appendChild(title);

      let date = document.createElement('TIME');
      date.innerHTML = obj[i].date;
      date.classList.add('date');
      date.setAttribute('datetime','0000-00-00');

      article.appendChild(date);
    }
    post.appendChild(article);
  })
}

window.loadContacts = function() {
  axios.get('./json/contact.json')
  .then(function(response){
    var obj = (response.data);

    var contactBox = document.getElementById('contactBox');
    contactBox.innerHTML = '';
    var contactpointers = document.createElement('DL');
    contactpointers.classList.add('contact-pointers');

    let person = document.createElement('DT');
    person.classList.add('title');
    person.innerHTML = obj[0].person;

    contactpointers.appendChild(person);

    let location = document.createElement('DD');
    location.classList.add('item');
    location.innerHTML = obj[0].location;

    contactpointers.appendChild(location);
    
    let contacts = obj[0].contacts[0];
    for (let i in contacts) {
      let item = contacts[i][0];
      var itemDD = document.createElement('DD');
      itemDD.classList.add('item');
      if (item.link) {
        var title = document.createElement('A');
        title.setAttribute('href',item.link);
        title.setAttribute('title',item.title);
      }
      else {
        var title = document.createElement('SPAN');
      }
      title.innerHTML = item.label;
      title.classList.add('title');
      itemDD.appendChild(title);
      contactpointers.appendChild(itemDD);
    }

    let networks = obj[0].networks[0];
    for (let i in networks) {
      let item = networks[i][0];
      var itemDD = document.createElement('DD');
      itemDD.classList.add('item');
      if (item.link) {
        var title = document.createElement('A');
        title.setAttribute('href',item.link);
        title.setAttribute('title',item.title);
      }
      else {
        var title = document.createElement('SPAN');
      }
      title.innerHTML = item.label;
      title.classList.add('title');
      itemDD.appendChild(title);
      contactpointers.appendChild(itemDD);
    }

    contactBox.appendChild(contactpointers);

  })
}

function loadCoverArea() {
  axios.get('./json/cover.json')
  .then(function(response){
    let obj = (response.data);
    let cover = document.getElementById('coverArea');

    let greeting = document.createElement('SPAN');
    greeting.innerHTML = obj[0].greeting;
    cover.appendChild(greeting);
    
    let me = document.createElement('H2');
    me.innerHTML = obj[0].me;
    cover.appendChild(me);

    let profissional = document.createElement('H1');
    profissional.innerHTML = obj[0].profissional;
    cover.appendChild(profissional);

    let slug = document.createElement('SMALL');
    slug.innerHTML = obj[0].slug;
    cover.appendChild(slug);
  })
}

window.aboutResume = function() {
  axios.get('./json/about.json')
  .then(function(response){
    let obj = (response.data);
    document.getElementById('aboutResume').innerHTML = obj[0].content;
  })
  loadTimeLine();
}

window.loadStatistics = function() {
  axios.get('./json/statistics.json')
  .then(function(response){
    let statistic = (response.data);
    let statistics = document.getElementById('statistics');
    statistics.innerHTML = '';
    for (let i in statistic) {
      let item = document.createElement('LI');
      item.classList.add('item');
      
      let content = document.createElement('DIV');
      content.classList.add('content');

      let icon = document.createElement('I');
      icon.classList.add('icon');
      icon.classList.add('material-icons');
      icon.innerHTML = statistic[i].icon;
      content.appendChild(icon);

      let number = document.createElement('SPAN');
      number.classList.add('number');
      number.innerHTML = statistic[i].operator;

      let span = document.createElement('SPAN');
      span.innerHTML = statistic[i].number;
      span.setAttribute('id',statistic[i].id);
      number.appendChild(span);
      content.appendChild(number);

      let title = document.createElement('SMALL');
      title.classList.add('text');
      title.innerHTML = statistic[i].title;

      content.appendChild(title);

      item.appendChild(content);
      statistics.appendChild(item);
    }

    loadCountNumber();
    
  })
}

window.showLoading = function() {
  randomdFunFacts();
  document.getElementById('funFactsCard').classList.add('active');
}

window.hideLoading = function() {
  document.getElementById('funFactsCard').classList.remove('active');
}

