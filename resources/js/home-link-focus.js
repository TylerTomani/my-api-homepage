const hLink = document.querySelector('.home-link > a')
const notesTextArea = document.querySelector('#notesTextArea')
addEventListener('keydown', e => {
    let key = e.key

    switch (key){
        case 'h':
            hLink.focus()
            break;
        case 'n':
            notesTextArea.value = ''
            notesTextArea.focus()
        default:
            // console.log('no element for this key')
    }
    
 
})

