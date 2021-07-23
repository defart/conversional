import React from 'react';
import {
    BoxComponent,
    ButtonComponent,
    H1Component,
    H2Component,
    LinkComponent,
    ListComponent,
    ModalComponent,
    ParagraphComponent
} from "../components/Components";
import {withModRefModal, withModRefTrigger} from "../components/referenceDecorators";

export const CT_M = 'ModalComponent';
export const CT_H1 = 'H1Component';
export const CT_H2 = 'H2Component';
export const CT_P = 'ParagraphComponent';
export const CT_UL = 'ListComponent';
export const CT_B = 'ButtonComponent';
export const CT_A = 'LinkComponent';
export const CT_DIV = 'BoxComponent';

export const componentTypes = [CT_M, CT_H1, CT_H2, CT_P, CT_UL, CT_B, CT_A, CT_DIV];

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
    let Component = resolveComponentByType(config.type);

    if ([CT_A, CT_B].includes(config.type) && config.props.modRefTrigger) {
        Component = withModRefTrigger(Component)
    } else if ([CT_M].includes(config.type) && config.props.modRef) {
        Component = withModRefModal(Component)
    }

    return () => <Component {...config.props} key={config.key}>{config.children}</Component>
};

export default ComponentFactory;
