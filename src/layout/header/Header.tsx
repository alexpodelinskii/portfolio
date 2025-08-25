import styled from "styled-components";
import {Logo} from "../../components/Logo.tsx";
import {Menu} from "../../components/Menu.tsx";

const headerMenuItems = ['Home', 'Skills','Works','Testimony','Contacts'];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu  menuItems={headerMenuItems}/>


        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    background-color: green;
    display: flex;
    justify-content: space-between;
`
