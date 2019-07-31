import { CountUp } from './CountUp.min.js';

window.onload = function() {
  loadCountNumber();
  loadTimeLine();
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
  }) 
}