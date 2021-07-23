import React from 'react';
import * as S from './style';
import logoSystem from '../../../assets/img/logo-system.png';



const Home = () => {

    return (      
        <S.ContainerPrincipal>
            <S.MenuLateral>
               <S.Logo src={logoSystem} />
                
                
            </S.MenuLateral>            
        </S.ContainerPrincipal>         
      
    )
}

export default Home
