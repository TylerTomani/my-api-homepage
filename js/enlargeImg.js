 // stepTxt in stepFocus.jscvc
const stepTexts = document.querySelectorAll('.step-txt')
const allImgs = document.querySelectorAll('img')
stepTexts.forEach(stepTxt => {
    stepTxt.addEventListener('click', e => {
        enlargeImg(e)
    })
    stepTxt.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            enlargeImg(e)
        }        
    })
    stepTxt.addEventListener('focusout', e => {
        delargeImg(e)
        console.log('focusout')
    })
    stepTxt.addEventListener('focus', e => {
        allImagesDelarge()
    })
})

function allImagesDelarge(){
    allImgs.forEach(img  => {
        console.log(img)
        img.classList.remove('enlarge')
    })
}
function enlargeImg(e){
    const parent = e.target.parentElement
    const img = parent.querySelector('.step-img > img')
    if(img){
        if(!img.classList.contains('enlargeImg') && img.classList.contains('delargeImg')){
            img.classList.add('enlargeImg')
            img.classList.remove('delargeImg')
        } else if (!img.classList.contains('enlargeImg')){
            img.classList.add('enlargeImg')
        } else {
            img.classList.remove('enlargeImg')
        }
    }

}
function delargeImg(e){

    const parent = getStepContainer(e.target.parentElement)
    const img = parent.querySelector('.step-img > img') 
    if(img){
        img.classList.remove('enlargeImg')   
    }
    const vid = parent.querySelector('.step-vid > video') ? parent.querySelector('.step-vid > video') : null
    if(vid){
        vid.classList.remove('enlargeImg')   
    }
}
