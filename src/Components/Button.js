import styled from "styled-components"

export default function Button(props){

    const {value, links, type, onClick} = props

    return(
        type ? <ButtonType onClick={onClick} href={links}>{value}</ButtonType> : <ButtonTypeTwo onClick={onClick} href={links}>{value}</ButtonTypeTwo>
    )
}

const ButtonType = styled.a`
    display: block;
    text-align: center;
    width: auto;
    margin-left: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #F08080;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: 0.5s all ease;

    &:hover{
        background-color: #B22222;
        transition: 0.5s all ease;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

const ButtonTypeTwo = styled.a`
    display: block;
    text-align: center;
    width: auto;
    margin-left: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #B2BABB;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: 0.5s all ease;

    &:hover{
        background-color: #515A5A;
        transition: 0.5s all ease;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`