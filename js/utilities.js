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
    else{
        alert('You are not eligible for add more than five players')
    }
}