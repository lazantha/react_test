import React from 'react'
import Data from '../assets/Data';


export default function PageList() {
  return (
    <div>

    <div className='node-list'>

        {Data.map((Data) => (
            <div className='Data' key={Data.id}>
                <h3>{Data.body}</h3>
                <p>{Data.updated}</p>
            </div>
        ))}
        
        
    </div> 
npp, audit
    </div>

  )
}
