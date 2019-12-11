import React from 'react';
import Pesquisar from '../../componentes/Pesquisar'

class PaginaInicial extends React.Component {
    constructor (props) {
      super(props)
      this.state = { resultado: '' };

      
      //   <exibicao lista={this.state.resultado}/>
      
    }
    render (){
        return (
            <Pesquisar/>

        )
    }
        
}

    
//   Enviar dados do componente filho para o state do componente pai
// Criar um componente de exibicao
// Enviar a lista de resultados via props para o componente de exibicao

export default PaginaInicial
