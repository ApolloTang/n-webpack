import React, {Component} from 'react'
import config from './config.json'

import styles from  './index.less'

class B extends Component {
    render() {
        return (
            <div className={styles.B} >
                This is component  B (imported from A to show that absolute path works)
            </div>
       );
    }
};

export default B;
