const componentTypes = [
    'H1Component',
    'H2Component',
    'ParagraphComponent',
    'ListComponent',
    'ButtonComponent',
    'LinkComponent',
    'BoxComponent',
];

const scanConfigObject = (config) => {
    if (!config.Content || !config.Content.type || !componentTypes.includes(config.Content.type)) {
        throw new Error(`Invalid component type ${config.type}`);
    }

    return {
        type: config.Content.type,
        props: config.Content.props || {},
        hasChildren: !!config.Children
    }
};


