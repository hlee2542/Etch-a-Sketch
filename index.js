function makeGrid(length) {
    let root = document.querySelector('#root');
    for (let k = 0; k < length; k++) {
        let row = document.createElement('div');
        row.classList.toggle('row');
        for (let j = 0; j < length; j++) {
            let square = document.createElement('div');
            square.classList.toggle('square');
            square.addEventListener('mouseenter', (event) => {
                event.target.style.backgroundColor = 'black';
            });
            row.append(square);
        }
        root.append(row);
    }
    let button = document.createElement('button');
    button.innerText = 'Reset';
    button.classList.toggle('button');
    button.addEventListener('click', () => {
        document.querySelectorAll('.square').forEach((square) => {
            square.style.backgroundColor = 'white';
        });
    });
    root.insertBefore(button, document.querySelector('.row'));
}

let length = prompt("Enter how many squares you want on a side.");
makeGrid(length);