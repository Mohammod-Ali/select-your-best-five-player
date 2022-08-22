

document.getElementById('btn-messi').addEventListener('click', function(){
    const playerName = getNameTextById('name-messi')

    getNameList(playerName) 
       
    this.disabled = true;
})

document.getElementById('btn-neymar').addEventListener('click', function(){
    const playerName = getNameTextById('name-neymar')

    getNameList(playerName)
    this.disabled = true;
})

document.getElementById('btn-mbappe').addEventListener('click', function(){
    const playerName = getNameTextById('name-mbappe')
    
    getNameList(playerName)
    this.disabled = true;
})

document.getElementById('btn-vitor').addEventListener('click', function(){
    const playerName = getNameTextById('name-vitor');

    getNameList(playerName)
    this.disabled = true;
})

document.getElementById('btn-ramos').addEventListener('click', function(){
    const playerName = getNameTextById('name-ramos');

    getNameList(playerName)
    this.disabled = true;
})

document.getElementById('btn-renato').addEventListener('click', function(){
    const playerName = getNameTextById('name-renato');

    getNameList(playerName)
    this.disabled = true;
})

// Budget section start here

document.getElementById('calculate-player').addEventListener('click', function(){
    const playerCostField = document.getElementById('player-cost');
    const playerCostString = playerCostField.value;
    const playerCost = parseInt(playerCostString)

    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesText = playerExpensesElement.innerText;

    const placesOl = document.querySelector('#list-container ol')

    const playerTotalCost = playerCost * placesOl.getElementsByTagName('li').length;
    console.log(playerTotalCost)

    playerExpensesElement.innerText = playerTotalCost
    
    playerCostField.value = '';
})