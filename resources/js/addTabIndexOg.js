
const stepTxts = document.querySelectorAll('.step-txt')
const stepTxtsPAs = document.querySelectorAll('.step-txt > p > a')

const copycodesTabs = document.querySelectorAll('.code-container > .copy-code')

const imgs = document.querySelectorAll('img')

let tabsAdded = false

stepTxts.forEach(stepTxt => {
    stepTxt.addEventListener('click', e => {
        e.preventDefault()
        addTabIndex(e)
    })
    stepTxt.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            // e.preventDefault()
            addTabIndex(e)
            // console.log(e.target)
        }
    })
    stepTxt.addEventListener('focus', e => {
        removeAsTabIndex()
        stepsFocused = false
    })
    
})
function addTabIndex(e){
   const parent = e.target.parentElement
   console.log(e.target)
   const imgs = parent.querySelectorAll('img')
   const as = parent.querySelectorAll('a')
   const copyCodes = parent.querySelectorAll('.copy-code')
   if(!tabsAdded){  
       if(as){
           as.forEach(a => {
               a.setAttribute('tabindex',"1")
           })
       }
       if(imgs){
           imgs.forEach(img => {
               img.setAttribute('tabindex','1')
           })
       }
       if(copyCodes){
           copyCodes.forEach(copyCode => {
               copyCode.setAttribute('tabindex','1')
           })
       }
   } else if(tabsAdded){
        removeAsTabIndex()
        console.log('else')
   }
   tabsAdded = !tabsAdded
   console.log(tabsAdded)
}
function removeAsTabIndex(){
   stepTxtsPAs.forEach(stepTxtsPA => {
       stepTxtsPA.removeAttribute('tabindex')
   })
}   

function addTabIndex(e){
    const parent = e.target.parentElement
    const as = parent.querySelectorAll('a')
    const copyCodes = parent.querySelectorAll('.copy-code')
    if(as){
        as.forEach(a => {
            a.setAttribute('tabindex',"1")
        })
    }
    if(copyCodes){
        copyCodes.forEach(copyCode => {
            copyCode.setAttribute('tabindex','1')
        })
    }
}
function removeAsTabIndex(e){
    stepTxtsPAs.forEach(stepTxtsPA => {
        stepTxtsPA.removeAttribute('tabindex')
    })
}