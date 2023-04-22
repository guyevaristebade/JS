let width_range = document.getElementById('width-range')
let width_value = document.getElementById('width-value')

let height_range = document.getElementById('height-range')
let height_value = document.getElementById('height-value')

let create_grid_btn = document.getElementById('create-grid-btn')
let colorPalette = document.getElementById('colorPalette')
let clear_grid_btn = document.getElementById('clear-grid-btn')
let erase_btn = document.getElementById('eraser-btn')
let container = document.querySelector('.container')


let state = {
    paint : false,
    currentColor : colorPalette.value,
    eraseColor : "transparent"
}

/**
 * Range Events
*/
width_range.addEventListener('input', (e)=>{
    if(width_value.textContent < 9){
        width_value.textContent = "0"+width_range.value
    }else{
        width_value.textContent = width_range.value
    }
})


height_range.addEventListener('input', (e)=>{
    if(height_value.textContent < 9){
        height_value.textContent = "0"+height_range.value
    }else{
        height_value.textContent = height_range.value
    }
})


create_grid_btn.addEventListener("click",(e)=>{

    if(width_range === 0 && height_range === 0) return
    
    container.innerHTML = ""

    for(let i = 0; i < height_range.value; i++){

        const gridRow = document.createElement('div')
        gridRow.classList.add('gridRow')

        for(let j = 0; j < width_range.value; j++){

            const gridCol = document.createElement('div')
            gridCol.classList.add('gridCol')

            gridCol.addEventListener("mousedown", (e) => {
                state.paint = true
                if(state.paint){
                    gridCol.style.backgroundColor = state.currentColor
                }
            })


            gridCol.addEventListener("mousemove" , (e)=>{
                
                if(state.paint){
                    gridCol.style.backgroundColor = state.currentColor
                }
            })

            gridCol.addEventListener('mouseup',()=>{
                state.paint = false
            })

            gridRow.appendChild(gridCol)

        }

        container.appendChild(gridRow)
    }
})


colorPalette.addEventListener("change", (e)=>{
    state.currentColor = colorPalette.value
})

clear_grid_btn.addEventListener('click', (e)=>{
    container.innerHTML = ""
})

erase_btn.addEventListener("click", (e)=>{
    document.querySelectorAll('.gridCol').forEach((col)=>{
        col.style.backgroundColor = state.eraseColor
    })
})
