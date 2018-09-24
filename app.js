import {Number} from './Number.js';

let inner__result = document.querySelector('.inner__result');
let inputs = new Number();


document.addEventListener('click', function (e) {
        if (e.target.className.includes('clear')) {

            inner__result.innerHTML = inputs.text;

    }   
        else if (e.target.className.includes('equals')) {    
            inputs.calculated();
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
            
            
    }
        null;
    
});

