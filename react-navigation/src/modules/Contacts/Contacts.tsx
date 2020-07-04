import React from 'react';
import { Transition } from '@uirouter/react';

interface IContactProps{
    $stateParams:{
        contactId: string;
    };
    $transition$ : Transition;
}

export const Contacts = (IContactProps: any) =>{
    const {contactId} = IContactProps;
    return (
    <div className="container">
        <h2>Contact form</h2>
        <form className="justify-content-left">
            <div className="form-group" style={{textAlign : "left"}}>
                <label htmlFor="username">Name:</label>
                <input type="text" className="form-control" id="username" />
            </div>
            <div className="form-group" style={{textAlign : "left"}}>
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group" style={{textAlign : "left"}}>
                <label htmlFor="comment">Feedback:</label>
                <textarea className="form-control" rows={5} id="comment" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    );
}