import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 3rem;

    input, textarea{
        width: 90%;
        margin: 10px;
        padding: 10px;
    }

    fieldset{
        background: #fff;
        border-radius: 21px;
        margin-bottom: 1rem;
    }

    label{
        display: block;
        margin-left: 10px;
    }

    .voltarClientes{
        display: flex;
        align-items: center;
        cursor: pointer;
        width: 100px;
    }

    .setaVoltar{
        width: 28px;
        height: 28px;
        padding: 0.5rem;
    }
`
export const Button = styled.button`
background-color: #0a4595;
padding: 10px 40px;
border-radius: 5px;
color: white;
margin-bottom: 3rem;
border: none;
cursor: pointer;
`