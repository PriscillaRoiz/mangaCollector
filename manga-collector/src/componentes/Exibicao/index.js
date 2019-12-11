import React from 'react'

const Exibicao =(props)=> {
        // console.log(`>>>>>`,props)
        console.log(props, 'oooooo');
        
        return (
            <div>

        <h1> {props.title}</h1>
        <p>{props.authors}</p>
            </div>
        )
    }

export default Exibicao