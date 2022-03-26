

window.addEventListener('scroll',function(){
    const parallax=document.querySelector('parallax');
    let scrollPosition=this.window.pageYOffset;
    
    parallax.style.transform='translateY('+ scrollPosition * 0.5 + 'px)';
})

function toggleClass(el){
    var kids = document.getElementById('menu').children;
    for(var i = 0; i < kids.length; i++){
        kids[i].className = "dark";
    }
    el.className = "light";
}
let toggleNavStatus=false;

let toggleNav = function(){   
    let getSidebarUl=document.querySelector(".nav-menu");
  
    if(toggleNavStatus===false){        
        getSidebarUl.style.top="60px";
        toggleNavStatus=true;
    }
    else if(toggleNavStatus===true){       
        getSidebarUl.style.top="-100%";  
        toggleNavStatus=false;
    }
}

const toTop = document.querySelector(".to-top");


    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100){
            toTop.classList.add("active");

        } else{
            toTop.classList.remove("active");
        }
    })  

    var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});