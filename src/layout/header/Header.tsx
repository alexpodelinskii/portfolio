import styled from "styled-components";
import {Logo} from "../../components/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {MobileHeaderMenu} from "./mobileHeaderMenu/MobileHeaderMenu.tsx";

const headerMenuItems = ['Home', 'Skills','Works','Testimony','Contacts'];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu  menuItems={headerMenuItems}/>
                    <MobileHeaderMenu menuItems={headerMenuItems}/>
                </FlexWrapper>

            </Container>



        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    background-color: rgba(31, 31, 32, 0.9  );
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`
