import React, { useState } from 'react';
import * as S from './style';
import logoSystem from '../../../assets/img/logo-system.png';
import IconLogin from '../../../assets/img/account_circle_white_24dp.svg';
import IconArrowRight from  '../../../assets/img/arrow_right.png';
import Clientes from '../../clientes/Clientes';




const Home = () => {
    let [page, setPage] = useState('home');
    

    return (      
        <S.ContainerPrincipal>
            <S.MenuLateral>
               <S.Logo src={logoSystem} />
               <S.ContainerOpcoes>      
                <div className="selecao">             
                   <S.OpcaoMenu onClick={() => setPage('home')}>
                       <S.LinkOpcaoMenu>Home</S.LinkOpcaoMenu>                       
                   </S.OpcaoMenu>
                </div>
                   <div className="selecao">
                       <S.OpcaoMenu onClick={() => setPage('produtos')}>                       
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
                    <S.SubTextoSaudacao>Seja bem -vindo ao dashboard da System Farma.</S.SubTextoSaudacao>
                    <S.ContaineCards>
                        <S.CardInfo onClick={() => setPage('clientes')}>
                            <h3 className="tituloInfo">Total de Clientes cadastrados</h3>
                            <div className="flex">
                                <p className="destaqueInfo">100</p>
                                <img className="setaInfo" src={IconArrowRight} alt="Seta para direita" />
                            </div> 
                        </S.CardInfo>
                        <S.CardInfo onClick={() => setPage('produtos')}>
                            <h3 className="tituloInfo">Total de produtos cadastrados</h3>
                            <div className="flex">
                                <p className="destaqueInfo">300</p>
                                <img className="setaInfo" src={IconArrowRight} alt="Seta para direita" />
                            </div>                
                        </S.CardInfo>
                    </S.ContaineCards></div> : <div></div> }
                    { page === 'clientes' ? <Clientes /> : <div></div> }                   
                </S.ContainerConteudo>
            </S.ContainerLateral>      
        </S.ContainerPrincipal>         
      
    )


    

}

export default Home
