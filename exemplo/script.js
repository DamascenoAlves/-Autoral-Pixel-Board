let currentColor = ""

function addEventOnPixel(array){
  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    current.addEventListener('click', ({target}) => {
      handleChangeColor(target)
    })
  }
}

function handleChangeColor(color){
  const allClass = color.classList
  if (allClass.length > 1) {
    color.classList.remove(allClass[1])
  }

  color.classList.add(currentColor);
  return
}

function removeSelectedColors(colorArray){
  if(colorArray.length <= 0) {return}

  for (let i = 0; i < colorArray.length; i++) {
    const current = colorArray[i];
    current.classList.remove('selected-color')
  }
}

window.onload = () => {
  const pixelContainer = document.querySelectorAll('.pixel')
  const colorContainer = document.querySelectorAll('.color')

  
  addEventOnPixel(pixelContainer)
  
  for (let i = 0; i < colorContainer.length; i++) {
    const current = colorContainer[i];
    current.addEventListener('click', ({target}) => {
      const allSelectedColors = document.querySelectorAll('.selected-color')
      removeSelectedColors(allSelectedColors)
      target.classList.add('selected-color')
      currentColor = target.classList[1]
    })
  }
}