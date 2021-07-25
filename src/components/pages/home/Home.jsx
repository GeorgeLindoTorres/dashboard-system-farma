import React, { useState, useEffect } from 'react';
import * as S from './style';
import logoSystem from '../../../assets/img/logo-system.png';
import IconLogin from '../../../assets/img/account_circle_white_24dp.svg';
import IconArrowRight from  '../../../assets/img/arrow_right.png';
import CadastroClientes from '../../cadastroClientes/CadastroClientes';
import Produtos from '../../produtos/Produtos';
import setaVoltar from '../../../assets/img/outline_keyboard_backspace_black_24dp.png';
import Clientes from '../../clientes/Clientes';
import CadastroProdutos from '../../cadastroProdutos/CadastroProdutos';



const Home = (props) => {
    const [page, setPage] = useState('home');
    const [qntClientes, setQntClientes] = useState('');   
    const [qntProdutos, setQntProdutos] = useState(''); 
    const dataClientes = localStorage.getItem('clientes');
    const dataProdutos = localStorage.getItem('produtos');

    const recuperaDados = () => {
        if(dataClientes){
        const arryData = JSON.parse(dataClientes);
        setQntClientes(arryData.length);
        }        
        if(dataProdutos){
           const arryDataProdutos = JSON.parse(dataProdutos)
            setQntProdutos(arryDataProdutos.length);
        }        
    }

    useEffect(() => {
        recuperaDados();        
    },);
     
    
    return (      
        <S.ContainerPrincipal>
            <S.MenuLateral>
               <S.Logo src={logoSystem} />
               <S.ContainerOpcoes>      
                <div className="selecao">             
                   <S.OpcaoMenu onClick={() => { setPage('home'); document.getElementById('containerConteudo').setAttribute("style", "height:100vw"); }}>                       
                    <S.LinkOpcaoMenu>Home</S.LinkOpcaoMenu>                       
                   </S.OpcaoMenu>
                </div>
                   <div className="selecao">
                       <S.OpcaoMenu onClick={() => { setPage('produtos'); document.getElementById('containerConteudo').setAttribute("style", "height:100%")}}>                       
                       <S.LinkOpcaoMenu>Produtos</S.LinkOpcaoMenu>                       
                   </S.OpcaoMenu>
                   </div> 
                   <div className="selecao">                      
                       <S.OpcaoMenu onClick={() => {
                           setPage('clientes');
                           document.getElementById('containerConteudo').setAttribute("style", "height:100%")                           
                           }}>                       
                       <S.LinkOpcaoMenu>Clientes</S.LinkOpcaoMenu>                       
                   </S.OpcaoMenu>
                   </div>                            
                </S.ContainerOpcoes>    
            </S.MenuLateral>
                <S.ContainerLateral>      
                <S.Navbar>
                    <S.LinkMenuNavbar>
                        Login
                    </S.LinkMenuNavbar>
                    <S.IconAvatar src={IconLogin}/>                    
                </S.Navbar>
                <S.ContainerConteudo id='containerConteudo'>
                    {page === 'home' ? <div><S.SaudacaoHome>Olá, Administrador</S.SaudacaoHome>
                    <S.SubTextoSaudacao>Seja bem-vindo ao dashboard da System Farma.</S.SubTextoSaudacao>
                    <S.ContaineCards>
                        <S.CardInfo onClick={() => {setPage('clientes'); document.getElementById('containerConteudo').setAttribute("style", "height:100%")}}>
                            <h3 className="tituloInfo">Total de Clientes cadastrados</h3>
                            <div className="flex">
                                <p className="destaqueInfo">{qntClientes}</p>
                                <img className="setaInfo" src={IconArrowRight} alt="Seta para direita" />
                            </div> 
                        </S.CardInfo>
                        <S.CardInfo onClick={() => {setPage('produtos'); document.getElementById('containerConteudo').setAttribute("style", "height:100vw")}}>
                            <h3 className="tituloInfo">Total de produtos cadastrados</h3>
                            <div className="flex">
                                <p className="destaqueInfo">{qntProdutos}</p>
                                <img className="setaInfo" src={IconArrowRight} alt="Seta para direita" />
                            </div>                
                        </S.CardInfo>
                    </S.ContaineCards></div> : <div></div> }
                    { page === 'cadastroClientes' ? <div>
                        <div className="voltarClientes" onClick={() => {setPage('clientes'); document.getElementById('containerConteudo').setAttribute("style", "height:100vw")}}>
                            <img className="setaVoltar" src={setaVoltar} alt="Seta para esquerda" />
                            <p>Clientes</p></div><CadastroClientes /></div> : <div></div> }
                    { page === 'cadastroProdutos' ? <div>
                        <div className="voltarClientes" onClick={() => {setPage('produtos'); document.getElementById('containerConteudo').setAttribute("style", "height:100vw")}}>
                            <img className="setaVoltar" src={setaVoltar} alt="Seta para esquerda" />
                            <p>Produtos</p></div><CadastroProdutos /></div> : <div></div> }                 

                    { page === 'clientes' ? <div><div className="divFlex"><h1>Clientes</h1><button className="btnCadastro" onClick={() => {setPage('cadastroClientes'); document.getElementById('containerConteudo').setAttribute("style", "height:100%")}}>Cadastrar Cliente</button></div>
                        <Clientes /></div> : <div></div> }

                         { page === 'produtos' ? <div><div className="divFlex"><h1>Produtos</h1><button className="btnCadastro" onClick={() => {setPage('cadastroProdutos'); document.getElementById('containerConteudo').setAttribute("style", "height:100%")}}>Cadastrar Produto</button></div>
                        <Produtos /></div> : <div></div> }
                                                    
                </S.ContainerConteudo>
            </S.ContainerLateral>      
        </S.ContainerPrincipal>         
      
    )   

}

export default Home
