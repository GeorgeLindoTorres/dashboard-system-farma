import React, { useState } from 'react';
import * as S from './styled';
// import setaVoltar from '../../assets/img/outline_keyboard_backspace_black_24dp.png';



const Clientes = () => {
    

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');
    const cliente = { 
        'nome': nome,
        'sobrenome': sobrenome,
        'email': email,
        'cep': cep,
        'rua': rua,
        'bairro': bairro,
        'cidade': cidade,
        'estado': estado,
        'pais': pais,        
    };
    const clientes = [];

   
    const handleSubmit= (e) => {               
        e.preventDefault();
        const clientesLocal = localStorage.getItem('clientes');
        if(clientesLocal){           
           clientes.push(...JSON.parse(clientesLocal));
        }
        clientes.push(cliente);
        localStorage.setItem('clientes', JSON.stringify(clientes));
        setNome('');
        setSobrenome('');
        setEmail('');
        setCep('');
        setRua('');
        setBairro('');
        setCidade('');
        setEstado('');
        setPais('');       
        document.getElementById('nome').focus();        
      }

    return (
        <S.Container>            
           <h1>Cadastrar Cliente</h1>
           <form onSubmit={e => { handleSubmit(e)}}>
               <fieldset className="info-base"><h2>Informações</h2>
                   <label htmlFor="nome">Nome</label>
                   <input id="nome"  type="text" name="nome" required value={nome} onChange={(e) => { setNome(e.target.value);}}/>
                   <label htmlFor="sobrenome">Sobrenome</label>                   
                   <input id="sobrenome" type="text" name="sobrenome" required value={sobrenome} onChange={(e) => { setSobrenome(e.target.value);}}/>
                   <label htmlFor="email">E-mail</label>
                   <input id="email" type="email" name="email" required value={email} onChange={(e) => { setEmail(e.target.value);}}/>
               </fieldset>
               <fieldset className="info-base"><h2>Endereço</h2>
                    <label htmlFor="cep">CEP</label>
                   <input id="cep"  type="number" name="enredeco" required value={cep} onChange={(e) => { setCep(e.target.value);}}/>
                   <label htmlFor="rua">Rua</label>
                   <input id="rua"  type="text" name="enredeco" required value={rua} onChange={(e) => { setRua(e.target.value);}}/>
                   <label htmlFor="bairro">Bairro</label>
                   <input id="bairro" type="text" name="bairro" required value={bairro} onChange={(e) => { setBairro(e.target.value);}}/>
                   <label htmlFor="cidade">Cidade</label>
                   <input id="cidade" type="cidade" name="cidade" required value={cidade} onChange={(e) => { setCidade(e.target.value);}}/>
                   <label htmlFor="estado">Estado</label>
                   <input id="estado" type="estado" name="estado" required value={estado} onChange={(e) => { setEstado(e.target.value);}}/>
                   <label htmlFor="pais">País</label>
                   <input id="pais" type="pais" name="pais" required value={pais} onChange={(e) => { setPais(e.target.value);}}/>
               </fieldset>
               <S.Button type="submit">
                    Salvar
                </S.Button>
           </form>           
        </S.Container>
    )
}

export default Clientes
