import React from 'react';

export const CT_M = 'ModalComponent';
export const CT_H1 = 'H1Component';
export const CT_H2 = 'H2Component';
export const CT_P = 'ParagraphComponent';
export const CT_UL = 'ListComponent';
export const CT_B = 'ButtonComponent';
export const CT_A = 'LinkComponent';
export const CT_DIV = 'BoxComponent';

export const componentTypes = [CT_M, CT_H1, CT_H2, CT_P, CT_UL, CT_B, CT_A, CT_DIV];

const H1Component = (p) => {
    console.log('pppp',p);
    return (<h1>h1: {p.text}</h1>);
}
const BoxComponent = ({children}) => (<div>{children}</div>);
const H2Component = ({text}) => (<h2>h2: {text}</h2>);
const ParagraphComponent = ({text}) => (<p>{text}</p>);
const ModalComponent = ({children}) => (<p>{children}</p>);
const LinkComponent = ({text}) => (<p>{text}</p>);
const ButtonComponent = ({text}) => (<button>{text}</button>);
const ListComponent = ({li}) => (<ul>{ li ? li.map(i => <li>{i}</li>) : 'nostuff' }</ul>);


export const componentsByTypeMap = {
    [CT_M]: ModalComponent,
    [CT_H1]: H1Component,
    [CT_H2]: H2Component,
    [CT_P]: ParagraphComponent,
    [CT_UL]: ListComponent,
    [CT_A]: LinkComponent,
    [CT_B]: ButtonComponent,
    [CT_DIV]: BoxComponent
};

const resolveComponentByType = type => {
    if (componentsByTypeMap[type]) {
        return componentsByTypeMap[type];
    }
    throw new Error(`Unable to resolve component for type: ${type}`)
};

const ComponentFactory = (config) => {
    const Comp = resolveComponentByType(config.type);
    console.log('PS',config.props);
    return () => <Comp { ...config.props } >{config.children}</Comp>
};

export default ComponentFactory;
