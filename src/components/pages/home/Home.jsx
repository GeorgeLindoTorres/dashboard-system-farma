import React from 'react';
import * as S from './style';
import logoSystem from '../../../assets/img/logo-system.png';
import IconLogin from '../../../assets/img/account_circle_white_24dp.svg';

const Home = () => {

    return (      
        <S.ContainerPrincipal>
            <S.MenuLateral>
               <S.Logo src={logoSystem} />       
            </S.MenuLateral>
                <S.ContainerLateral>      
                <S.Navbar>
                    <S.LinkMenuNavbar>
                        Login
                    </S.LinkMenuNavbar>
                    <S.IconAvatar src={IconLogin}/>                    
                </S.Navbar>
                <S.ContainerConteudo></S.ContainerConteudo>
            </S.ContainerLateral>      
        </S.ContainerPrincipal>         
      
    )
}

export default Home
