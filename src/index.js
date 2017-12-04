import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DynForm from './DynForm';
//import registerServiceWorker from './registerServiceWorker';

let lista = document.getElementsByTagName('dynform');

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log("mudança ocorreu");
        console.log("target compare" + mutation.target===lista[0]);
        drawApp();
        
    });
  });

for (let dynform of lista){
    observer.observe(dynform, { attributes: true });
}


function drawApp(){
    for (let dynform of lista) {        
        const metadata = dynform.getAttribute('metadata');
        const subject = dynform.getAttribute('subject') || "";
        if (metadata){
            ReactDOM.render(<DynForm metadata={metadata} subject={subject}/>, dynform);
        }
    }
}

drawApp();

// registerServiceWorker();
