import React from 'react';
import ReactDOM from 'react-dom';
import DynForm from './DynForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DynForm />, div);
});
