import React, { Fragment } from 'react';
import { UISref, UISrefActive } from '@uirouter/react';

interface IProps {}

export const NavigationBar = (IProps: any) =>{
    return(
        <Fragment>
            <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <UISrefActive class={'active'}><UISref to={'home'}><li>Home</li></UISref></UISrefActive>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <UISrefActive class={'active'}><UISref to={'contact'} params={{contactId: '1'}}><li>Contacts</li></UISref></UISrefActive>
                </a>
            </li>
            </ul>
        </Fragment>
    );
}