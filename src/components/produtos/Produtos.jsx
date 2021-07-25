import React from 'react';
import * as S from './styled';


const Clientes = () => {
    
    const produtosLocal = localStorage.getItem('produtos');
    const dadosProdutos = JSON.parse(produtosLocal);

    


    return (
        <S.Container>        
        <div className="conteainerTabela">
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                </tr>
                { dadosProdutos ? dadosProdutos.map((produto) => <tr><td>{produto.nome}</td><td>{produto.preco}</td><td>{produto.quantidade}</td></tr>) : <tr><td>Nenhum produto cadastrado</td><td>-</td><td>-</td></tr>}
            </table>
        </div>
        <div className="footer"></div>
        </S.Container>
        
    )
}

export default Clientes;