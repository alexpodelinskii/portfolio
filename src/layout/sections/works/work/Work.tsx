import styled from "styled-components";

export type WorkPropsType = {
    imgSrc: string
    title: string
    text: string
    demoSrc: string
    codeSrc: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.imgSrc} alt={props.title}/>
            <Title>${props.title}</Title>
            <Text>${props.text}</Text>
            <Link href={props.demoSrc}>demo</Link>
            <Link href={props.codeSrc}>code</Link>
        </StyledWork>
    );
};
const StyledWork = styled.div`
    background-color: #6c1818;`
const Image = styled.img``
const Title = styled.h3``
const Text = styled.p``
const Link = styled.a``