import React, {useEffect, useState} from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

// Maybe split into separate files, but it's basically too trivial atm
export const BoxComponent = ({children, borderSize = '0px'}) => (<div style={{border: `${borderSize} solid #000`}}>{children}</div>);

export const H1Component = ({text}) => (<h1>{text}</h1>);
export const H2Component = ({text}) => (<h2>h2: {text}</h2>);
export const ParagraphComponent = ({text}) => (<p>{text}</p>);

export const LinkComponent = ({text, url, onClick = () => null}) => (<a href={url} target="_blank" onClick={onClick} rel="noreferrer" >{text}</a>);
export const ButtonComponent = ({text, onClick = () => console.log(text)}) => (<button onClick={onClick} >{text}</button>);

export const ListComponent = ({li}) => {
    return <ul>{
        li ? li.map((item, index) => <li key={index}>{item}</li>) : null
    }</ul>
};

export const ModalComponent = ({isOpen,children,  height = 400, width = 600, onClose = () => null }) => {
    const [openState, setOpenState] = useState(isOpen);
    useEffect(() => {
        setOpenState(isOpen)
    }, [isOpen]);

    return <Rodal
        width={parseInt(width)} // parse int cause config incoming w&h are in px format
        height={parseInt(height)}
        visible={openState}
        onClose={() => { setOpenState(false); onClose()} }
    >{children}</Rodal>
};
