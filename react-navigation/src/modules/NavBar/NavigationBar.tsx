import React, { Fragment } from 'react';
import { UISref, UISrefActive } from '@uirouter/react';

interface IProps {}

export const NavigationBar = (IProps: any) =>{
    return(
        <Fragment>
            <ul className="nav nav-tabs">
                <UISrefActive class={'active'}><UISref to={'home'}><li><a role="button">Home</a></li></UISref></UISrefActive>
                <UISrefActive class={'active'}><UISref to={'contact'} params={{contactId: '1'}}><li><a role="button">Contacts</a></li></UISref></UISrefActive>
            </ul>
        </Fragment>
    );
}