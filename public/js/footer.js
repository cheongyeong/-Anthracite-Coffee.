
var coll = document.getElementsByClassName("ft_title");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var menuList = this.nextElementSibling;
    if (menuList.style.maxHeight){
      menuList.style.maxHeight = null;
    } else {
      let act = document.querySelectorAll('.ft_title.active');
      for(j= 0; j<act.length; j++){
      act[j].classList.remove('active')
      act[j].nextElementSibling.style.maxHeight = null;
    } this.classList.add('active')
     menuList.style.maxHeight = '200px';
       

    } 
  });
}
