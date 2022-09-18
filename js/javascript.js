window.addEventListener('load',function(){
    // Side bar
    const menuOption = document.querySelectorAll(".side-element");
    const menuBtn = document.getElementById("menu-btn");
    menuOption.forEach(function (item) {
        item.addEventListener('click', function(){
            if( this.dataset.hover !== undefined ){
                menuOption.forEach(function (m) {
                    m.classList.remove('chosen-section'); 
                });
                const chosenSection = this.dataset.hover;
                const hoverClass = document.querySelector(".hover-bar");
                const sections = document.querySelectorAll(".hover-mid");
                sections.forEach(function (s) {
                    if(chosenSection === s.id){
                        let containsHover = document.getElementById(chosenSection).classList.contains('active-hover');
                        switch(containsHover){
                            case false:
                                document.getElementById(chosenSection).classList.add('active-hover');
                                hoverClass.classList.add('active-hover');
                                document.querySelector(".main-content").classList.add("mc-extend");
                                item.classList.add("chosen-section");
                            break;
                            case true:
                                document.getElementById(chosenSection).classList.remove('active-hover');
                                hoverClass.classList.remove('active-hover');
                                document.querySelector(".main-content").classList.remove("mc-extend");
                                item.classList.remove("chosen-section");
                            break;
                        }
                    } else {
                        document.getElementById(s.id).classList.remove('active-hover'); 
                    }
                });
            }
        });
    });
    // Responsive
    const sideBarOptions = document.querySelector(".side-mid");
    menuBtn.addEventListener('click', function(){
        let icon = this.querySelector('.fa-bars');
        let displayCheck = window.getComputedStyle(sideBarOptions).display;
        if(displayCheck == 'none'){
            sideBarOptions.style.display = 'block';
            icon = this.querySelector('.fa-bars');
            icon.classList.add('fa-xmark');
            icon.classList.remove('fa-bars');
        } else {
            sideBarOptions.style.display = 'none';
            icon = this.querySelector('.fa-xmark');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
            menuOption.forEach(function (m) {
                m.classList.remove('chosen-section'); 
            });
            const hoverClass = document.querySelector(".hover-bar");
            const hoverBars = document.querySelectorAll(".hover-mid");
            hoverClass.classList.remove('active-hover');
            hoverBars.forEach(function(s){
                document.getElementById(s.id).classList.remove('active-hover'); 
            });
        }
    });
});
