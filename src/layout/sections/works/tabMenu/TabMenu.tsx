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
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
`
const MenuItem = styled.li`
`

