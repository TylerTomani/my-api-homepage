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
        // console.log('focusout')
    })
    stepTxt.addEventListener('focusin', e => {
        // console.log('focusin')
    })
    stepTxt.addEventListener('focus', e => {
    })
})

function toggleImg(e){
    const parent = getStepParent(e.target.parentElement)
    // console.log(parent)
}

function getStepParent(parent){
    if(parent.classList.contains('step-col') || parent.classList.contains('step')){
        return parent
    } else if(parent.parentElement){
        return getStepParent(parent.parentElement)
    } else {
        return null
    }
}