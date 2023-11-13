const codeClicks = document.querySelectorAll('.copy-code')
let parent
codeClicks.forEach(codeclick => {
    codeclick.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            let parent = getParent(e)
            let image = parent.querySelector('.img-container > img')
            codeImgEnlarge(image,parent)
        }
    })
    codeclick.addEventListener('focus', () => {
        codeImgDeanimate()
    })
})

function codeImgDeanimate(){
    const images = document.querySelectorAll('img')
    images.forEach(img =>{
        img.classList.add('deanimate')
        img.classList.remove('animate')
        // img.classList.remove('deanimate')
        
    })
}

function getParent(e){
    // console.log(e.target)
    let parent = e.target.parentElement
    if(parent.classList.contains('code-container')){
        return parent.parentElement.parentElement
    }
    // console.log(parent)
}

function codeImgEnlarge(image,parent){
    if(image){
        if (image.classList.contains('animate')) {
            parent.style.position = 'static';
            image.classList.remove('animate');
            image.classList.add('deanimate'); 
            
        } else {
            parent.style.position = 'relative';
            image.classList.remove('deanimate');
            image.classList.add('animate');
        }
    }

}