import React from 'react'
import ComponentFactory, {componentTypes, CT_MODAL} from "./ComponentFactory";

const parseComponentType = (config) => {
    const type = ( config.Content && config.Content.type) || undefined;
    if (!type || !componentTypes.includes(type)) {
        throw new Error(`Invalid component type ${config.Content.type}`);
    }
    return type;
};

const createComponentTree = (config, isRootComponent = true, key = null, modalComponents = []) => {
    const type = parseComponentType(config);

    // handle children
    let children = null;
    if (config.Children && Object.keys(config.Children).length) {
        children = Object.keys(config.Children)
            .map(k => createComponentTree(config.Children[k], false, k, modalComponents))
    }

    const RenderedComponent = ComponentFactory({
        type,
        key: isRootComponent ? 'Root' : key,
        props: config.Content.props || {},
        children
    });

    if (isRootComponent) {
        return function TreeView() { return <>
            <RenderedComponent key={"rootComponent"}/>
            { modalComponents.map((ModalComp, i) => <ModalComp key={i} />) }
            </>};
    } else if (type === CT_MODAL ) {
        modalComponents.push(RenderedComponent);
        return null;
    }
    return <RenderedComponent key={key} />;
};

export const buildViewFromConfig = (configStr) => {
    return createComponentTree(JSON.parse(configStr));
};


