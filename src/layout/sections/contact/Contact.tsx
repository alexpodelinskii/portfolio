import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <Form>
                    <Field placeholder={'Name'}/>
                    <Field placeholder={'Subject'}/>
                    <Field placeholder={'Message'} as={'textarea'}/>
                    <Button type={'submit'}>Send message</Button>
                </Form>
            </Container>

        </StyledContact>
    );
};

const StyledContact = styled.section`
    text-align: center;
`

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea{
        resize: none;
        height: 155px;
    }
`
const Field = styled.input`
    width: 100%;
    font-family: 'Poppins' ,sans-serif;
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.secondaryBg};
    padding: 7px 15px;
    font-weight: 400;
    font-size: 12px;
    color: ${theme.colors.fontsColor};
    &:focus{
        outline: 1px solid ${theme.colors.borderColor};
    }
    &::placeholder{
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
`