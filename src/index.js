import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DynForm from './DynForm';
import meta from './metadata.json';
//import registerServiceWorker from './registerServiceWorker';

let lista = document.getElementsByTagName('dynform');

let observer = new MutationObserver(mutations => mutations.map(mutation => drawElement(mutation.target)));

for (let dynform of lista){
    observer.observe(dynform, { attributes: true });
}

function drawElement(dynform){
    console.log("subject"+dynform.getAttribute('subject'));
    const metadata = dynform.getAttribute('metadata') || JSON.stringify(meta);
    const subject = dynform.getAttribute('subject') || "";
    if (metadata){
        ReactDOM.render(<DynForm metadata={metadata} subject={subject}/>, dynform);
    }
}

function drawApp(){
    for (let dynform of lista) {        
        drawElement(dynform);
    }
}

drawApp();

// registerServiceWorker();
