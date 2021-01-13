import React, { FC } from 'react';
import {Toast} from 'react-bootstrap';   

type ChildProps = {
    showToast: boolean,
    setShowToast: any
}

const FailureMessageToast: FC<ChildProps> = ({showToast, setShowToast}) => {
    return (
        <Toast show={showToast} onClose={()=>setShowToast(!showToast)} delay={3000} autohide style={{position: 'absolute', bottom: 20, left: 20, backgroundColor: 'white'}}>
            <Toast.Header>
                <strong className="mr-auto" style={{color: 'red'}}>Failure</strong>
            </Toast.Header>
            <Toast.Body style={{color: 'black'}}> Error in submitting message! Please try again. </Toast.Body>
        </Toast>
    )
};

export default FailureMessageToast;