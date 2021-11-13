const content_box_img = document.getElementById('container-box');

content_box_img.addEventListener('mouseover',(e)=> {
    const imagen = e.target.closest("div").children;
    if(imagen.length == 2){
        imagen[0].classList.add('front-final')
        imagen[0].classList.remove('front-inicial')
        imagen[1].classList.add('back-final')
        imagen[1].classList.remove('back-inicial')
        
    }
    
})
    content_box_img.addEventListener('mouseout',(e)=> {
        
        const imagen = e.target.closest("div").children;
    if(imagen.length == 2){
    imagen[0].classList.add('front-inicial')
    imagen[0].classList.remove('front-final')
    imagen[1].classList.add('back-inicial')
    imagen[1].classList.remove('back-final')
    }

})


