(()=>{
    const aboutSection = document.querySelector(".about-section"),
    tagsContainer = document.querySelector(".about-tags");

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
})();