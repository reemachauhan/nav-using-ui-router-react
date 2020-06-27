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
    <div>{`Contact Us : The Contact Id is ${contactId}`}</div>
    );
}