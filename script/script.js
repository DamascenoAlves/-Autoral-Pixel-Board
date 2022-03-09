let currentColor="transparent"
let boardSize=0

function removeSelectedColors(cores){
    if(cores.length<=0) {return}

    for (let i = 0; i < cores.length; i++) {
        const element = cores [i];
        element.classList.remove('selected-color')
    }
}
function handleChangeColor(color){
    const allClass = color.classList
    if(allClass.length > 1){
        color.classList.remove(allClass[1])
    }
    color.style.backgroundColor=currentColor
    return
}
function addEventOnPixel(array){
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        current.addEventListener('click',({target})=>{
            handleChangeColor(target)
        })
    }
}
function addEventOnColor(colorCont){
    for (let i=0;i<colorCont.length;i++) {
        const current = colorCont[i];
        current.addEventListener('click',({target}) => {
            const allSelectedColors = document.querySelectorAll('.selected-color')
            removeSelectedColors(allSelectedColors)
            target.classList.add('selected-color')
            useButton(target)
        })
        
    }
}
function addEventOnBoard(board){        
        const current = board;
        current.addEventListener('change',({target}) => {
            boardSize=target.value
            recriateBoard(boardSize)            
        })
}
function adjustPixelSize(pixelsNumber){
    let pixelsize=0;
    if(pixelsNumber==50){
        pixelsize=10
    }else if(pixelsNumber==5){
        pixelsize=45
    }else{
        pixelsize=50;
    }
    for(let i=0;i<(pixelsNumber**2);i++){
        document.getElementsByClassName("pixel")[i].style.width = `${pixelsize}px`;
        document.getElementsByClassName("pixel")[i].style.height = `${pixelsize}px`;
    }
}
function generateRandomColor()
{
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}
function useButton(pressedButton){
    if(pressedButton.classList[1]=='random'){
        for(i=0;i<3;i++){
            let botao = document.getElementsByClassName('color')[i]
            botao.style.backgroundColor=generateRandomColor()
        }
        
    }else if(pressedButton.classList[1]=='clear'){
        recriateBoard(boardSize)
    }
    else{
        currentColor= pressedButton.style.backgroundColor
    }
}
function recriateBoard(boardSize){
    const pixelCont = document.querySelector('.pixel-container')
    pixelCont.innerHTML=''
    let linhatela=''
        
    for(let coluna=0;coluna<boardSize;coluna++){
        linhatela+=`<div class="pixel"></div>`;    
    }
    for(let linha=0;linha<boardSize;linha++){
            pixelCont.innerHTML+=`<div class="linha">`+linhatela+`</div>`
    }
    adjustPixelSize(boardSize)
    const pixel = document.querySelectorAll('.pixel')
    addEventOnPixel(pixel)
}


window.onload = () =>{
    const pixel = document.querySelectorAll('.pixel')
    const color = document.querySelectorAll('.color')
    const board = document.querySelector('.board')
    addEventOnPixel(pixel)
    addEventOnColor(color)
    addEventOnBoard(board)
}