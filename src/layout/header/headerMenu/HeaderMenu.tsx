import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <MenuList>
                {
                    props.menuItems.map((el, index) => {
                        return <MenuItem key={index}>
                            <MenuLink href="">
                                {el}
                                <Mask>
                                    <span>{el}</span>
                                </Mask>
                                <Mask>
                                    <span>{el}</span>
                                </Mask>
                            </MenuLink>
                        </MenuItem>;
                    })
                }

            </ MenuList>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`
const MenuList = styled.ul``

const MenuLink = styled.a`
    font-family: Josefin Sans, sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    color: ${theme.colors.fontColorAccent};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const MenuItem = styled.li`
    position: relative;
    color: transparent;
    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.fontColorAccent};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }
    &:hover {
        ${Mask} {
            
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.fontsColor};
            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
        &::before {
            transform: scale(1);
        }
    }
`