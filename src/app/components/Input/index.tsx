import React from "react";
import { Input } from 'antd';
import type { PropsInputcustom } from "./types";
import * as Styled from './styles'

export default function InputCustom({placeholder='Digite o valor', label ,...rest}: PropsInputcustom)
{
    return(
        <Styled.ContainerMaster>
            {label && (
              <Styled.Label>{label}</Styled.Label>  
            )}            
           <Styled.InputCustom placeholder={placeholder} {...rest}/>
        </Styled.ContainerMaster>
    )
}