const chessBoard = () =>{
    for (let i = 0; i < 4; i++){
        const blackCell = '██';
        const whiteCell = '  ';
        let oddString = '';
        let evenString = '';

        for (let m = 0; m < 4; m++) {
            oddString += blackCell;
            oddString += whiteCell;
        }

        for (let n = 0; n < 4; n++) {
            evenString += whiteCell;
            evenString += blackCell;
        }

        console.log(oddString);
        console.log(evenString);
    }
}

chessBoard();