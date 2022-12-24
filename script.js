const switchToggle=document.querySelector('input[type="checkbox"]');

function switchTheme(e){
     document.querySelector("body").style.transition = "all 0.5s";
    if(e.target.checked){
         document.documentElement.setAttribute('data-theme','dark');   
    }else{
         document.documentElement.setAttribute('data-theme','light');
    }
 }

switchToggle.addEventListener('change',switchTheme);