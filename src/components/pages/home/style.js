import styled from 'styled-components';


export const Logo = styled.img` 
    background-color: #fff;
    width: 150px;
    height: auto;
    margin: 1.80rem;
`;

export const MenuLateral = styled.div`
    width: 240px;    
    background: linear-gradient(148.88deg, #0A4595 28.15%, #000307 78.06%);    
`;

export const ContainerOpcoes = styled.div`
    display: flex;
    flex-direction: column;
    
    .selecao:hover{
        background-color: #f36f21a3
    }
`

export const OpcaoMenu = styled.div`
    width: 100%;
    height: 70px;     
    display: flex;
    justify-content: center;
    align-items: center;    
`
export const LinkOpcaoMenu = styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;    
    cursor: pointer;
`
export const OpcaoMenuSelecionado = styled(OpcaoMenu)`
    background-color: #f36f21
`

export const ContainerPrincipal = styled.div`
    display: flex;
`;

export const Navbar = styled.div`
    width: 100%;
    height: 70px;   
    background: #F36F21;
    display: flex;
    justify-content: flex-end;
`;

export const LinkMenuNavbar = styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
    padding: 1.5rem 0 1.5rem 1.5rem;
    cursor: pointer;    
`


export const ContainerLateral = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const ContainerConteudo = styled.div`
    width: 100%;
    height: 100vw;
    background: #EFF5F8;
`

export const IconAvatar = styled.img`     
    width: 30px;
    margin: 0px 3rem 0 4px;
    cursor: pointer;        
`;

export const SaudacaoHome = styled.h2`
    margin: 3rem  0 0 3rem;   
`
export const SubTextoSaudacao = styled.p`
    margin: 0 0 3rem 3rem;   
`
export const ContaineCards = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CardInfo = styled.div`    
    width: 45%;
    height: 175px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.44);
    box-sizing: border-box;
    border-radius: 20px;
    margin: auto;
    padding: 1rem;
    cursor: pointer;  

    .flex{
        display: flex;
        justify-content: space-between;
    }

    .tituloInfo{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
    margin: 0 0 1rem 0;
    text-align: center;
    }

    .destaqueInfo{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    color: #000000;
    margin: auto;
    display: inline;
    }

    .setaInfo{
        height: 2rem;
    }

    
`