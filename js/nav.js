function UserDropdown() {
    document.getElementById("UserContent").classList.toggle("show");
}

window.onclick = function(event) 
{
  if (!event.target.matches('.dropbtn')) 
  {
    var dropdowns = document.getElementsByClassName("user-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) 
     {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show'))
      {
        openDropdown.classList.remove('show');
      }
    }
  }
}
