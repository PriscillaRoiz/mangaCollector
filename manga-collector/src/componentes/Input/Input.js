import React from 'react';

const Input = ({ tipo, placeholder, pegarValorInput }) => {
   // const { tipo, placeholder, change } = props;  
    return(
        <input 
        type={tipo} 
        placeholder={placeholder}>
        </input>
    )
}
export default Input;