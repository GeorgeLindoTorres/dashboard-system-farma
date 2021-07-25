import React, { useState, useEffect } from 'react';
import * as S from './styled';


const Clientes = () => {
    
    const clientesLocal = localStorage.getItem('clientes');
    const dadosClientes = JSON.parse(clientesLocal);

    


    return (
        <S.Container>        
        <div className="conteainerTabela">
            <table>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                </tr>
                {dadosClientes.map((cliente) => <tr><td>{cliente.nome}</td><td>{cliente.email}</td></tr>)}
            </table>
        </div>
        </S.Container>
        
    )
}

export default Clientes;
