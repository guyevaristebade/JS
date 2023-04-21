let width_range = document.getElementById('width-range')
let width_value = document.getElementById('width-value')

let height_range = document.getElementById('height-range')
let height_value = document.getElementById('height-value')
let create_grid_btn = document.getElementById('create-grid-btn')

let colorPalette = document.getElementById('colorPalette')
let clear_grid_btn = document.getElementById('clear-grid-btn')
let erase_btn = document.getElementById('eraser-btn')
let paint_btn = document.getElementById('paint-btn')
let container = document.querySelector('.container')

let currentColor = colorPalette.value

let state = {
    paint : false,
    erase : false,
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

colorPalette.addEventListener("change", (e)=>{
    state.currentColor = e.target.value
})

paint_btn.addEventListener("click", (e)=>{
    state.draw = true
    state.erase = false
})


erase_btn.addEventListener("click", (e)=>{
    state.erase = true
    state.draw = false
})


clear_grid_btn.addEventListener('click', (e)=>{
    document.querySelectorAll('.gridCol').forEach((el)=>{
        el.style.backgroundColor = state.eraseColor
    })
})

function onMouseMove(target){
    target.style.backgroundColor = state.currentColor
}

function onMouseUp(e){
    state.draw = false
}



create_grid_btn.addEventListener("click",(e)=>{
    if(width_range === 0 && height_range === 0) return;
    container.innerHTML = "";

    for(let i=0; i<height_range.value; i++){

        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');

        for(let j=0; j<width_range.value; j++){

            const gridCol = document.createElement('div');
            gridCol.classList.add('gridCol');

            gridCol.addEventListener("mousedown", (e) => {

                state.draw = true;

                if(state.draw){
                    gridCol.style.backgroundColor = state.currentColor;
                }

                if(state.erase){
                    gridCol.style.backgroundColor = state.eraseColor;
                }
                
            })


            gridCol.addEventListener("mousemove", (e) => {

                if(state.draw){
                    gridCol.style.backgroundColor = state.currentColor
                }

                if(state.erase){
                    gridCol.style.backgroundColor = state.eraseColor
                }
            })


            gridCol.addEventListener("mouseup", (e) => {
                state.draw = false
            })

            gridRow.appendChild(gridCol);
        }
        container.appendChild(gridRow);
    }
});


