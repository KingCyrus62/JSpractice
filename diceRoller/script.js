function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const diceValues = [];
    const images = [];
    for (let i=0; i<numOfDice; i++){
        const diceValue = Math.floor(Math.random()*6)+1;
        diceValues.push(diceValue);
    }
    console.log(diceValues);
    images.push

}