import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DynForm from './DynForm';
//import registerServiceWorker from './registerServiceWorker';

let lista = document.getElementsByTagName('dynform');

for (let dynform of lista) {
    // console.log ("#1:"+lista[i].getAttribute('metadata'));
    var metadata = dynform.getAttribute('metadata');
    ReactDOM.render(<DynForm metadata={metadata} />, dynform);
}

// registerServiceWorker();
