import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DynForm from './DynForm';
//import registerServiceWorker from './registerServiceWorker';

let lista = document.getElementsByTagName('dynform');

for (let dynform of lista) {
    // console.log ("#1:"+lista[i].getAttribute('metadata'));
    const metadata = dynform.getAttribute('metadata');
    const subject = dynform.getAttribute('subject') || "";
    ReactDOM.render(<DynForm metadata={metadata} subject={subject}/>, dynform);
}

// registerServiceWorker();
