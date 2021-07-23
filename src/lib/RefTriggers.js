import React, {useContext} from 'react'

class RefTriggers {

    constructor() {
        this.triggers = {};
    }

    register(ref, triggerFn) {
        this.triggers[ref] = triggerFn;
    }

    unregister(ref) {
        if (this.triggers[ref]) {
            delete this.triggers[ref]();
        }
    }

    trigger(ref) {
        if (!!this.triggers[ref]) {
            this.triggers[ref]();
        }
    }
}
const refTriggers = new RefTriggers();
const refTriggerContext = React.createContext(refTriggers);
const useModRefTriggers = () => {
    return useContext(refTriggerContext);
};

export default useModRefTriggers;
