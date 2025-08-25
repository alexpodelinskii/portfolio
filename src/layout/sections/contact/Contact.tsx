import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <Form>
                <Field placeholder={'Name'}/>
                <Field placeholder={'Subject'}/>
                <Field placeholder={'Message'} as={'textarea'}/>
                <Button type={'submit'}>Send message</Button>
            </Form>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 100vh;
    background-color: #f3b4b4;
    text-align: center;
`
const Form = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
`
const Field = styled.input`
    width: 100%;
`