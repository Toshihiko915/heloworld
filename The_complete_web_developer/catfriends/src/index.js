import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {cats} from './cats';

ReactDOM.render(
    <CardList cats={cats}/>

, document.getElementById('root'));

serviceWorker.unregister();
