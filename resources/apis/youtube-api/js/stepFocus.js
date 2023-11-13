const titlesFocus = document.querySelectorAll('.title')
const fullCode = document.getElementById('fullCode')

addEventListener('keydown', e => {
    let key = e.key
    console.log(key)
    titlesFocus.forEach(title => {
        console.log(title.innerText[5])
        if(key === title.innerText[5]){
            title.focus()
        }
        if(key === 'f'){
            fullCode.focus()
        }
    })
})

