import React from 'react'

const Switchs = (props) => (
    <div className='buttons' >
        <button name='ON' onClick={(e) => props.buttonPressed(e.target.name)}>ON</button>
        <button name='OFF' onClick={(e) => props.buttonPressed(e.target.name)}>OFF</button>
    </div>
)

export default Switchs
