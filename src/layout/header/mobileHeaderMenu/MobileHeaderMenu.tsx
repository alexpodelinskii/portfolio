import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {useState} from "react";

export const MobileHeaderMenu = (props: { menuItems: Array<string> }) => {
    const [menuIsOpen, setMenuStatus
    ] = useState(false)
    const changeMenuStatus = () => setMenuStatus((!menuIsOpen));
    return (
        <StyledMobileHeaderMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={changeMenuStatus}>
                <span></span>
            </BurgerButton>
            <MenuList isOpen={menuIsOpen} onClick={changeMenuStatus}>
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
        </StyledMobileHeaderMenu>
    );
};

const StyledMobileHeaderMenu = styled.nav`
    position: relative;
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }


`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 11;

    span {
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.fontsColor};
        position: absolute;
        left: 40px;
        bottom: 50px;

        &::before,
        &::after {
            content: '';
            display: block;
            height: 2px;
            background-color: ${theme.colors.fontsColor};
            position: absolute;

        }

        &::before {
            width: 36px;
            transform: translateY(-10px);
        }

        &::after {
            width: 36px;
            transform: translateY(10px);
        }

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);

            &::before {
                transform: translateY(0px) rotate(45deg);
            }

            &::after {
                width: 36px;
                transform: translateY(0px) rotate(-45deg);
            }
        `}

    }

`
const MenuList = styled.ul<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(31, 31, 32, 0.9);

    gap: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: none;
    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;

    `}


`

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