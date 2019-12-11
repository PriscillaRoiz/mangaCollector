import React from 'react';
import Input from '../../componentes/Input/Input';
import Button from '../../componentes/Button/Button';

import './Logar.css';

const Logar = (props) => (
    <div>
        <form className="login-form">
            <div className="group-label">
                <label> Usuário: </label>
                <Input tipo="text"></Input>
            </div>
            <div className="group-label">
                <label> Senha: </label>
                <Input password="password"></Input>
            </div>
            <Button>Entrar</Button>
        </form>
    </div>
);
    export default Logar
