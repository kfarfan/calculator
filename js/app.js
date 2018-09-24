import {Number} from './Number.js';

let inner__result = document.querySelector('.inner__result');
let inputs = new Number();
let audio = new Audio('sound.mp3');

document.addEventListener('click', function (e) {
        if (e.target.className.includes('clear')) {
            inputs = new Number();
            inner__result.innerHTML = inputs.text;
            

    }   
        else if (e.target.className.includes('equals')) {    
            inputs.calculated();
            audio.play();
            console.log(inputs);
             if(inputs.returned == undefined) {
                 inner__result.innerHTML = 'ERROR';
             } else {
            inner__result.innerHTML = inputs.returned;
             }
    }   
        else if ( e.target.className.includes('calc__numbers')) {
            let selected = e.target.textContent;
            inputs.add(selected);
            inputs.toString();
            inner__result.innerHTML = inputs.text;
            console.log(inputs);
            
            
    }
        null;
    
});

