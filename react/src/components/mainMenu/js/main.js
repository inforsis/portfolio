function loadMenu() {
  alert ('side :D')
  return false;
  axios.get('./json/menu.json')
  .then(function(response){
    let obj = (response.data);
    var menu = document.getElementById('mainMenu');
    menu.innerHTML = "";
    for (let i in obj) {
      let item = document.createElement('A');
      if (i == 0)
        item.classList.add('active');
      item.classList.add('main-menu-item');
      item.setAttribute('href',obj[i].router);      
      item.setAttribute('id',obj[i].id);      
      item.setAttribute('onclick','navMainMenu(this.id);'+obj[i].callback);      
      item.setAttribute('data-title',obj[i].title); 
      
      let icon = document.createElement('I');
      icon.classList.add('material-icons');
      icon.innerHTML = obj[i].icon;

      item.appendChild(icon);

      menu.appendChild(item);
    }
  })
}