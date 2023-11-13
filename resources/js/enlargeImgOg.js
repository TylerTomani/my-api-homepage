const stepTexts = document.querySelectorAll('.step-txt')
const allImgs = document.querySelectorAll('img')
stepTexts.forEach(stepTxt => {
    stepTxt.addEventListener('click', e => {
        // allImagesDelarge()
        toggleImg(e)
    })
    stepTxt.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            toggleImg(e)
        }        
    })
    stepTxt.addEventListener('focusout', e => {
        allImagesDelarge()
        // console.log('focusout')
    })
    stepTxt.addEventListener('focusin', e => {
        // allImagesDelarge()
        delargeImg(e)
        console.log('focusin')
    })
    stepTxt.addEventListener('focus', e => {
        allImagesDelarge()
    })
})

function allImagesDelarge(){
    allImgs.forEach(img  => {
        // console.log(img)
        img.classList.remove('enlarge')
    })
}
function toggleImg(e){
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
    console.log('delargeImg e.target:',e.target)
    console.log('delargeImg parnet:',parent)
    // const img = parent.querySelector('.step-img > img') 
    // const vid = parent.querySelector('.step-vid > video') ? parent.querySelector('.step-vid > video') : null
    // if(img){
    //     img.classList.remove('enlargeImg')   
    // }
    // if(vid){
    //     vid.classList.remove('enlargeImg')   
    // }
}
