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
                
                if(x<=100){
                    x=100;
                }else{
                    x-=moveAmount;
                }
                
                break;
            case 'ArrowRight':
                if(x>=410){
                    x=410;
                } else {
                    x+=moveAmount;
                }
                
                break;
            case 'a':
                if(x<=100){
                    x = 100;
                } else {
                    x -= moveAmount;
                }
                
                break;
            case 'd':
                if (x>=410) {
                    x = 410;
                } else {
                    x+=moveAmount;
                }
                
                break;
            
        }
    
    player_chara.style.top = `${y}px`;
    player_chara.style.left = `${x}px`;
    }
});