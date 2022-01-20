import React, { Component } from 'react';

class ModalPlace extends Component {
    render({setModalOpen}) {
        return (
            <>
                <div>
                <button onClick={ ()=> setModalOpen(false)}>X</button>
                </div>
            </>
        );
    }
}

export default ModalPlace;
