
function generateGrid(side) {
    if (side > 100) {
        alert("Invalid input: the maximum number of pixels is 100 x 100");
        return;
    }

    // remove all child of container
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    let sideLength = 960 / side;
    for (let i = 0; i < side; i++) {
        let column = document.createElement('div');
        container.appendChild(column);
        for (let j = 0; j < side; j++) {
            let squareDiv = document.createElement('div');
            squareDiv.classList.add('square-div');
            squareDiv.style.width = `${sideLength}px`;
            squareDiv.style.height = `${sideLength}px`;

    
            //set up a hover effect; when a mouse goes over a grid, it turns blue
            squareDiv.addEventListener('mouseover', () => {
                squareDiv.style.backgroundColor = 'blue';
            })
            column.appendChild(squareDiv);
        }
    }
}

window.onload = function () {
    // create a 16 x 16 of square divs
    const container = document.querySelector('#container');
    generateGrid(16);

    // add functionality to button that prompts user for #square per side
    // of the new grid, then generate it. 
    const generateGridButton = document.getElementById('generate-grid');
    generateGridButton.addEventListener('click', () => {
        let side = prompt("Please enter number of grid per side", 16);
        if (side != null) {
            generateGrid(side);
        }
    });

}

