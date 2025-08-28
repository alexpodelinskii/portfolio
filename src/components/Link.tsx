import {theme} from "../styles/Theme.ts";
import styled from "styled-components";

export const Link = styled.a`
    padding: 10px;
    z-index: 1;
    position: relative;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    &:hover{
        &::before{
            height: 10px;
        }
    }
    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        bottom: 4px;
        left: 0;
        right: 0;
        z-index: -1;
        background-color: ${theme.colors.fontColorAccent};


    }

`