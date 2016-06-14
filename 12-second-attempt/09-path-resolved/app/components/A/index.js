import React, {Component} from  'react';
import {render} from 'react-dom';
import config from './config.json'

import B from  'components/B/'



import styles from  './index.less'
class A extends Component {
    render() {
        return (
            <div className={styles.A} >
                This is component A: {config.attr}
                <B />
            </div>
       );
    }
};

export default A;
