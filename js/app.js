

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
// calculate player cost

document.getElementById('calculate-player').addEventListener('click', function(){
    const playerCostField = document.getElementById('player-cost');
    const playerCostString = playerCostField.value;
    const playerCost = parseInt(playerCostString)

    const playerExpensesElement = document.getElementById('player-expenses');

    const placesOl = document.querySelector('#list-container ol')

    const playerTotalCost = playerCost * placesOl.getElementsByTagName('li').length;

    playerExpensesElement.innerText = playerTotalCost
    
    playerCostField.value = '';
})

// calculate total cost

document.getElementById('calculate-total').addEventListener('click', function(){
    // player expenses
    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString =  playerExpensesElement.innerText; 
    const playerExpenses = parseInt(playerExpensesString)

    // manager cost
    const managerCostField = document.getElementById('manager-cost');
    const managerCostString = managerCostField.value;
    const managerCost = parseInt(managerCostString)

    // coach cost
    const coachCostField = document.getElementById('coach-cost');
    const coachCostString = coachCostField.value;
    const coachCost = parseInt(coachCostString);

    // total cost
    const totalCostElement = document.getElementById('total-Cost');

    const totalCost = playerExpenses + managerCost + coachCost;
    
    totalCostElement.innerText = totalCost;

    coachCostField.value = '';
    managerCostField.value = '';

})