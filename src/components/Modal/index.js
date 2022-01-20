import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class Modal extends Component {
    
    render({modalOpen, children}) {
        if(!modalOpen) return null;
        
        return createPortal(
            <div>
               <div>{children}</div> 
            </div>,
            document.body
        );
    }
}

export default Modal;
