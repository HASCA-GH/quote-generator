// import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const GradientBackgroundCon = styled.div`
  /* background: linear-gradient(to right, #000045, #1cb5e0) */
  background: linear-gradient(to right, #000045, #1cb510);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  width: 100vw; 
  height: 100vh;

  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
`;

export const BackgroundImage1 = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: -3px;
  margin-top: 9px;
`;

export const BackgroundImage2 = styled(Image)`
  position: fixed;
  z-index: 1;
  right: 21px;
  bottom: -10px;
`;

export const FooterCon = styled.div`
  width: 100vw;
  height: 50px;
  text-align:center;
  font-family: 'Source Code Pro', monospace;
  font-size: 15px;
  position:absolute;
  bottom: 0;
  color: white;
  z-index: 999999;
`;

export const FooterLink = styled(Link)`
  color: white;
`;

export const QuoteGeneratorCon = styled.div`
  min-height:350px;
  min-width:350px;
  height:70vh;
  width:70vw;
  border: 2px solid #ffffff22;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;

  background: rgba( 147, 255, 0, 0.3 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 5.5px );
  -webkit-backdrop-filter: blur( 5.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const QuoteGeneratorInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
`;

export const QuoteGeneratorTitle = styled.div`
  font-family: 'Permanent Marker', cursive;
  font-size: 50px;
  text-align: center;
  color:white;
  padding: 0px 20px 0px 20px;
  position:relative;

  @media only screen and (max-width: 600px){
    font-size:30px;
  }
`;

export const QuoteGeneratorSubTitle = styled.div`
  color: white;
  font-family: 'Caveat', cursive;
  font-size: 35px;
  position:relative;
  width: 100%;
  text-align: center;
  padding: 0px 20px 0px 20px;

  @media only screen  and (max-width: 600px){
    font-size: 25px;
  }
`;

export const GenerateQuoteButton = styled.div`
  height: 100px;
  width: 300px;
  border: 2px solid darkgray;
  border-radius: 20px;

  margin-top: 20px;
  position: relative;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  top:20px;
  margin: auto;
  transform-origin: center;

  background: rgba(0,0,70,0.3);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter:blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.18);
  
  &:hover {
    filter: brightness(3);
    transition: 0.2s all ease-in-out;
    transform: scale(1.1);

    transform-origin: center;
  }
`;

export const GenerateQuoteButtonText = styled.div`
  color: white;
  font-family: 'Caveat', cursive;
  font-size: 35px;
  left: 0%;
  top: 25%;
  transform: translate()(-50%,-50%);
  position: absolute;
  width: 100%;
  text-align: center;
`;