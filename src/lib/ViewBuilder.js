import React from 'react'
import ComponentFactory, {componentTypes} from "./ComponentFactory";


const parseComponentType = (config) => {
    const type = ( config.Content && config.Content.type) || undefined;
    if (!type || !componentTypes.includes(type)) {
        throw new Error(`Invalid component type ${config.Content.type}`);
    }
    return type;
};


//@todo: put modals into array, and add them at the root level component
const createComponentTree = (config, isRootComponent = true, key = null) => {
    const type = parseComponentType(config);

    // handle children
    let children = null;
    if (config.Children && Object.keys(config.Children).length) {
        children = Object.keys(config.Children)
            .map(k => createComponentTree(config.Children[k], false, k))
    }

    const RenderedComponent = ComponentFactory({
        type,
        key: isRootComponent ? 'Root' : key,
        props: config.Content.props || {},
        children
    });

    if (isRootComponent) {
        return function TreeView() { return <RenderedComponent/> };
    }
    return <RenderedComponent />;
};

export const buildViewFromConfig = (configStr) => {
    return createComponentTree(JSON.parse(configStr));
};


