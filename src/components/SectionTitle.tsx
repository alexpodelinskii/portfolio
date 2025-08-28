import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 36px;
    position: relative;
        margin-bottom: 90px;
    &::before{
        content: '';
        display: block;
        height: 1px;
        width: 55px;
        background-color: ${theme.colors.fontColorAccent};
        position: absolute;
        bottom: -30px;
        left: calc(50% - 23px);
    }
`