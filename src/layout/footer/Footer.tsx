import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";
import {font} from "../../styles/Common.ts";
import { Container } from "../../components/Container.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Name>Alexandr</Name>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'instagram'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'telegram'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'vk'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'linkedin'}/>
                            </SocialLink>
                        </SocialItem>

                    </SocialList>
                    <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
                </FlexWrapper>
            </Container>


        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 40px 0;
    background-color: ${theme.colors.primaryBg};
`
const Name = styled.span`
    ${font({weight: 700, family: "'Josefin Sans', sans-serif", Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;

`
const SocialList = styled.ul`
    gap: 20px;
    display: flex;
    margin: 30px 0;
`
const SocialItem = styled.li``
const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    color: ${theme.colors.fontColorAccent};
    &:hover{
        background-color: ${theme.colors.fontColorAccent};
        color: ${theme.colors.primaryBg}; 
        transform: translatey(-4px);
    }
    
;
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
    
`