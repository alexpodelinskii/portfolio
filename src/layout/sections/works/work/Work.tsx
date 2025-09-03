import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.ts";
import {Button} from "../../../../components/Button.tsx";

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
            <ImageWrapper>
                <Image src={props.imgSrc} alt={props.title}/>
                <Button>view project</Button>
            </ImageWrapper>

            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={props.demoSrc}>demo</Link>
                <Link href={props.codeSrc}>code</Link>
            </Description>
        </StyledWork>
    );
};
const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};

    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`

const ImageWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
    }

    ${Button} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -100;
        opacity: 0;

        &::before {
            width: 100%;
            height: 100%;
            left: 0;
        }
    }

    &:hover {
        &::before {
           opacity: 1;
        }


        ${Button} {
            z-index: 1;
            opacity: 1;
        }
    }
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }


        ${Button} {
            z-index: 1;
            opacity: 1;
        }
    }
`
    const Image = styled.img`
    width: 100%;
    height: 260px;
    
`
const Description = styled.div`
    padding: 25px 20px;
`
const Title = styled.h3`

`
const Text = styled.p`
    margin-top: 14px;
    margin-bottom: 10px;
`
