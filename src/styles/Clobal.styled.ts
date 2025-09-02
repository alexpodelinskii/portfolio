import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        width: 100%;
        font-size: 100%;
        line-height: 1;
        font-size: 14px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        color: ${theme.colors.fontsColor};
    }

    li {
        list-style: none;
    }

    a,
    a:visited,
    a:hover {
        text-decoration: none;
    }

    a {
        cursor: pointer;
        color: ${theme.colors.fontsColor};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: inherit;
        font-size: inherit;
    }

    img {
        vertical-align: top;
    }

    :focus, :active {
        outline: none;
    }

    a:focus, a:active {
        outline: none;
    }

    nav, footer, header, aside {
        display: block;
    }


    input, button, textarea {
        font-family: inherit;
    }

    input::-ms-clear {
        display: none;
    }

    button {
        cursor: pointer;
        background-color: inherit;
        color: ${theme.colors.fontsColor};
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }


    body {

        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
    }

    section {
        padding: 100px 0;

        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }

    section:nth-of-type(odd) {

        background-color: ${theme.colors.primaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
    }

    h3 {
        font-family: Josefin Sans, sans-serif;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 1px
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
    }
`