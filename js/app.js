function getNameTextById(userId){
    const playerName = document.getElementById(userId)
    const playerNameString = playerName.innerText;
    return playerNameString
}

function getNameList(playerName){
    const placesOl = document.querySelector('#list-container ol')
    const li = document.createElement('li')
    li.innerText = playerName
   
    
    if(placesOl.getElementsByTagName('li').length <= 4){
       return placesOl.appendChild(li)
    }
}

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

