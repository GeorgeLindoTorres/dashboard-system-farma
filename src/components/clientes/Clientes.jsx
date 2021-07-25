import React from 'react';
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
                { dadosClientes ? dadosClientes.map((cliente) => 
                <tr><td>{cliente.nome}</td><td>{cliente.email}</td></tr>) :
                <tr><td>Nenhum cliente cadastrado</td><td>-</td></tr>
                }                 
            </table>
        </div>
        <div className="footer"></div>
        </S.Container>
        
    )
}

export default Clientes;
