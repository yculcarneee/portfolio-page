import React, { FC } from 'react';
import {Toast} from 'react-bootstrap';   

type ChildProps = {
    showToast: boolean,
    setShowToast: any
}

const MessageToast: FC<ChildProps> = ({showToast, setShowToast}) => {
    return (
        <Toast show={showToast} onClose={()=>setShowToast(!showToast)} delay={3000} autohide style={{position: 'absolute', bottom: 20, left: 20, backgroundColor: 'white'}}>
            <Toast.Header>
                <strong className="mr-auto" style={{color: 'green'}}>Success</strong>
            </Toast.Header>
            <Toast.Body style={{color: 'black'}}> Submitted message! </Toast.Body>
        </Toast>
    )
};

export default MessageToast;