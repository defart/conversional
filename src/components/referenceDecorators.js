import useModRefTriggers from "../lib/RefTriggers";
import React, {useCallback, useEffect, useState} from "react";

export const withModRefTrigger = (Component) => {
    return (props) => {
        const refs = useModRefTriggers();

        const clickFn = () => {
            refs.trigger(props.modRefTrigger);
            if (props.onClick) { props.onClick() };
        };

        return <Component {...props} onClick={clickFn} >{props.children}</Component>
    }
};

export const withModRefModal = (Component) => {
    return (props) => {
        const refs = useModRefTriggers();
        const [modRefOpen, setModRefOpen] = useState(!!props.isOpen);

        const triggerOn = useCallback(() => {
            setModRefOpen(true);
        }, [setModRefOpen]);

        useEffect(() => {
            refs.register(props.modRef, triggerOn);
            return () => refs.unregister(props.modRef);
        }, [props, refs, triggerOn]);

        return <Component {...props} isOpen={modRefOpen} onClose={() => setModRefOpen(false)}>{props.children}</Component>
    }
};
