import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const Button = styled.button`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    width: 170px;
    height: 32px;
    z-index: 2;

    &::before {
        position: absolute;
        display: inline-block;
        content: "";
        height: 10px;
        width: 50%;
        bottom: 0;
        left: 25%;
        background-color: ${theme.colors.fontColorAccent};
        z-index: -1;
    }

    &:hover {
        &::before {
            left: 0;
            width: 100%;
            height: 100%;


        }
    }
`