import React from "react";
import * as Styled from './styles';
import type { PropsButtonCustom } from "./types";

export default function ButtonCustom({type='primary', textButton='Enviar', ...rest}:PropsButtonCustom){

<button></button>
    return(<Styled.ButtonCustom type={type} {...rest}>{textButton}</Styled.ButtonCustom>)
}