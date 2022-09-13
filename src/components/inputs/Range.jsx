import { useState } from 'react'

import styles from './Range.module.css'

function Range ({ getRange, range }) {

    return ( 
    <div className={styles.section}>
        <input 
            type="number" 
            value={range} 
            onChange={getRange}
            min="4"
            max="16"
            className={styles.numberIpt}
        />
        <input 
            type="range" 
            min="4" 
            max="16" 
            id="range"
            value={range}
            onChange={getRange}
            className={styles.rangeIpt}
        />
        
    </div>
    )
}

export default Range