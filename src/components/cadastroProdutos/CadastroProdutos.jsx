import React, { useState } from 'react';
import * as S from './styled';

const Clientes = () => {

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('R$ ');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    
    const produto = { 
        'nome': nome,
        'preco': preco,
        'descricao': descricao,
        'quantidade': quantidade,             
    };
    const produtos = [];

   
    const handleSubmit= (e) => {               
        e.preventDefault();
        const produtosLocal = localStorage.getItem('produtos')
        if(produtosLocal){           
           produtos.push(...JSON.parse(produtosLocal));
        }
        produtos.push(produto);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        setNome('');
        setPreco('R$ ');
        setDescricao('');
        setQuantidade('');              
        document.getElementById('nome').focus();        
      }

    return (
        <S.Container>                
           <h1>Cadastrar Produto</h1>
           <form onSubmit={e => { handleSubmit(e)}}>
               <fieldset className="info-base"><h2>Informações</h2>
                   <label htmlFor="nome">Nome</label>
                   <input id="nome" type="text" name="nome" required placeholder="Nome/ Modelo/ Marca" value={nome} onChange={(e) => { setNome(e.target.value);}}/>
                   <label htmlFor="preco">Preço</label>                   
                   <input id="preco" type="text" name="preco" required value={preco} onChange={(e) => { setPreco(e.target.value);}}/>
                   <label htmlFor="descricao">Descrição</label>
                   <textarea id="descricao" placeholder="Características do produto..." rows="10" name="descricao" required value={descricao} onChange={(e) => { setDescricao(e.target.value);}}/>
                   <label htmlFor="quantidade">Quantidade</label>
                   <input id="quantidade"  type="number" name="quantidade" placeholder="0" required value={quantidade} onChange={(e) => { setQuantidade(e.target.value);}}/>
               </fieldset>               
               <S.Button type="submit">
                    Salvar
                </S.Button>
           </form>           
        </S.Container>
    )
}

export default Clientes
