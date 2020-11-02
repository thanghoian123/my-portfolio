(()=>{
    const aboutSection = document.querySelector(".about-section"),
    tagsContainer = document.querySelector(".about-tags");
    const imgbox = document.querySelector('.home-img .img-box img');
    const contactbox = document.querySelector('.contact-box');
    const button = document.querySelectorAll('.button');
    const projectItem = document.querySelectorAll('.project-item');

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click',()=>{
            for (let i = 0; i < button.length; i++){
                button[i].classList.remove('active');
            }
            button[i].classList.add('active');
            
        })
    }

    tagsContainer.addEventListener('click',(event)=>{
        if(event.target.classList.contains("tag-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            tagsContainer.querySelector('.active').classList.remove('active');
            event.target.classList.add('active'); 
            
            aboutSection.querySelector('.tag-content.active').classList.remove('active');
            aboutSection.querySelector(target).classList.add('active');
        }else{

        }
    })

    imgbox.addEventListener('mouseenter',(e)=>{
        contactbox.style.transform = "translateY(0)";
        contactbox.style.opacity="1";
    })

    imgbox.addEventListener('mouseleave',(e)=>{
        contactbox.style.opacity="0";
        contactbox.style.transform = "translateY(60px)";
    })
})();