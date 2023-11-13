const projectContainer= document.querySelectorAll('.project-container')
const tutorialContainer= document.querySelectorAll('.tutorial-container > a')
let selectedId


addEventListener('keydown', e => {
    projectContainer.forEach(container => {
        if(container.hasAttribute('id') && container.id[0] === e.key){
            container.querySelector('.txt-container > a').focus()
        }
    })
    tutorialContainer.forEach(a => {
        if(a.hasAttribute('id') && a.id[0] === e.key){
            a.focus()
        }
    })
})