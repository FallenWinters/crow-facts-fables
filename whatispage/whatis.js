//Imma make a game here so beware of change >:D
const player_chara = document.getElementById('crow_cara');
const moveAmount = 5;
let x = 0;
let y = 0;

document.addEventListener("keyup", event =>{
    player_chara.src = null;
})

document.addEventListener("keydown", event =>{
    if(event.key.toLowerCase('a') || event.key.toLowerCase('d') ||  event.key.toLowerCase('w') 
        || event.key.startsWith('Arrow') || event.key.toLowerCase('spacebar')){
    
        switch(event.key){
            case 'ArrowLeft':
                x-=moveAmount;
                break;
            case 'ArrowRight':
                x+=moveAmount;
                break;
            case 'ArrowUp':
                y-=moveAmount;
                break;
            case 'a':
                x-=moveAmount;
                break;
            case 'd':
                x+=moveAmount;
                break;
            case 'w':
                y-=moveAmount;
                break;
            case 'spacebar':
                y-=moveAmount;
                break;
            
        }
    
    player_chara.style.top = `${y}px`;
    player_chara.style.left = `${x}px`;
    }
})