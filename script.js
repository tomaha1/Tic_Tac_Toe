const gameBoard = (() => {
    const gameArray = [];
    const updateGameArray = (value, index) => { if (gameArray[index] === undefined) {gameArray[index] = value} };
    
    return {
        updateGameArray,
    };
  })();

const Player = (name, mark) => {
    };

const displayController = (() => {

})();

const game = (() => {

});