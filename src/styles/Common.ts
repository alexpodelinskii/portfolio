import {theme} from "./Theme.ts";

type fontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number;
    Fmax?:number;
    Fmin?:number
}

export const font = ({family, weight, color, lineHeight, Fmax, Fmin}: fontPropsType) => `
font-family: ${family || 'Poppins'};
font-weight: ${weight || 400};
color: ${color || theme.colors.fontsColor};
line-height: ${lineHeight || 1.2};
font-size: calc((100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);

`