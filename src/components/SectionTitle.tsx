import styled from "styled-components";
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

export const SectionTitle = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30})}
    text-align: center;
    position: relative;
    margin-bottom: 90px;
    letter-spacing: 3px;

    &::before {
        content: '';
        display: block;
        height: 1px;
        width: 55px;
        background-color: ${theme.colors.fontColorAccent};
        position: absolute;
        bottom: -30px;
        left: calc(50% - 23px);
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`