
import React from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined} from "@material-ui/icons"

const Info=styled.div`
        opacity:0;
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        background-color:rgba(0,0,0,0.2);
        z-index:3;
        display:flex;
        align-items:center;
        justify-content:center;       
         transition: all 0.5 ease;
         cursor:pointer;
`

const Container=styled.div`
        flex:1;
        margin:5px;
        min-width:300px;
        height:350px;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#F9F9F9;
        position:relative;

        &:hover ${Info}{
            opacity:1;
            
 }
        &:hover{
            transform:scale(1.02);
        }
`
const Circle=styled.div`
        width:250px;
        height:280px;
        border-radius:5%;
        background-color:white;
        position:absolute;
`
const Image=styled.img`
        height:75%;   
        z-index:2; 
`

const Icon=styled.div`
        width:40px;
        height:40px;
        border-radius:50%;
        background-color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        margin:10px;
        cursor:pointer;
        transition:all 0.5 ease-in;

        &:hover{
            background-color:#F9F9F9;
            transform:scale(1.1);
        }
`


const Product = ({item}) => {
  return (
            <Container>
                <Circle/>
                <Image src={item.img}/>
                <Info>
                    <Icon>
                        <ShoppingCartOutlined/>
                    </Icon>
                    <Icon>
                        <SearchOutlined/>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined/>
                    </Icon>
                </Info>

            </Container>
    
  )
}

export default Product