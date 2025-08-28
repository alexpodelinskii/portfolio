import styled from "styled-components";

export const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: top left;
    }
`