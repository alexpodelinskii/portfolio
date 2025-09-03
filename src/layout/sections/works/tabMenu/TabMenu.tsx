import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <MenuList>{
                props.menuItems.map((el, index) => {
                    return <MenuItem key={index}>
                        <Link href="">{el}</Link>
                    </MenuItem>;
                })
            }

            </MenuList>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    
`

const MenuList = styled.ul`
    margin: 0 auto 50px; 
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
`
const MenuItem = styled.li`
`

