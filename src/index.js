import createModule from 'react-standalone';
import schema from './DynForm-schema';
import DynForm from './DynForm';
import methods from './DynForm-methods';
import './index.css';
import meta from './metadata.json';
//import registerServiceWorker from './registerServiceWorker';


export default createModule('dynform', { schema, methods, DynForm });