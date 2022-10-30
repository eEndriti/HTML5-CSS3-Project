boolean = true;
document.querySelector('#hamburger').addEventListener('click', () => {
    if(boolean){
        document.querySelector('.nav').classList.add('responsive-nav');
        document.querySelector('.nav-links').classList.add('responsive-links');
        boolean = false;
    }else{
        document.querySelector('.nav').classList.remove('responsive-nav');
        document.querySelector('.nav-links').classList.remove('responsive-links');
        boolean = true;
    }
;
});