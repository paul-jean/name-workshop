import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components take precedence over default Bootstrap styles.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameWorkshop from './NameWorkshop';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NameWorkshop />, document.getElementById('root'));
registerServiceWorker();
