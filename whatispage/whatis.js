//Imma make a game here so beware of change >:D
const player_chara = document.getElementById('crow_cara');
const moveAmount = 10;
let x = 250;
let y = 0;


/*document.addEventListener("keyup", event =>{
    player_chara.src = null;
})*/

document.addEventListener("keydown", event =>{
    if(event.key.startsWith('a') || event.key.startsWith('d') 
        || event.key.startsWith('Arrow')){
    
        switch(event.key){
            case 'ArrowLeft':
                x-=moveAmount;
                break;
            case 'ArrowRight':
                x+=moveAmount;
                break;
            case 'a':
                x-=moveAmount;
                break;
            case 'd':
                if (x>=300) {
                    x = 200;
                } else {
                    x+=moveAmount;
                }
                
                break;
            
        }
    
    player_chara.style.top = `${y}px`;
    player_chara.style.left = `${x}px`;
    }
});