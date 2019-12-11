import React from 'react'
// import Input from '../../componentes/Input/Input'
// import Button from '../../componentes/Button/Button'
import Exibicao from '../Exibicao'
import  getIsbn from '../../service/isbn'

import './styles.css'

class Pesquisar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '', resultado: [] };
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }
  resultado = async (event) => {
    event.preventDefault();
    let resultado = await getIsbn()
    // debugger
    // console.log(`oihjh`, resultado.data.items[0].volumeInfo.title, resultado.data.items[0].volumeInfo.authors);
    
    this.setState({resultado: resultado.data});
    console.log(this.state.resultado, '>>>>>');
    
  }  
  
  render () {
    
    // const { title } = this.state.resultado.items
    // debugger
    console.log(this.state.resultado[0], 'nop')

    return (
      <div>
        <form className="search-form" onSubmit={this.resultado}>
            <div className="group-label">
              <label> Seu código: </label>
                <input
                  type='text'
                  onChange={this.handleChange} />
                <input type='submit' />
            </div>      
        </form>

        <div className= "resultado">
        { this.state.resultado.length > 0 ? 
        <Exibicao title={this.state.resultado[0].volumeInfo.title} 
                  authors={this.state.resultado[0].volumeInfo.authors}/>
        : null }
          {/* <img src = 'https://images-na.ssl-images-amazon.com/images/I/41BL4glqIFL._SX325_BO1,204,203,200_.jpg'/>  
          <h1> Title: Absolute Sandman - Volume 1 (Português) Capa dura – 1 nov 2018</h1>
          <p>
            Autor: Neil Gaiman <br/>
            Capa dura: 616 páginas <br/>
            Editora: Panini; Edição: 1ª (31 de outubro de 2018)<br/>
            Idioma: Português<br/>
            ISBN-10: 8573516534<br/>
            ISBN-13: 978-8573516531
          </p> */}
        
        </div>
      
      </div>
    )
  }
}

export default Pesquisar

