import React, {Component} from  'react';
import {render} from 'react-dom';

import A from './components/A/';



import './main.less';
import config from './config.json'
class Main extends Component {
    render() {
        return (
            <div>
                <div>This is main: {config.attr} </div>
                <A/>
            </div>
       );
    }
};

// render( <Greeter />, document.getElementById('root'));
render( <Main />, document.getElementById('root'));
