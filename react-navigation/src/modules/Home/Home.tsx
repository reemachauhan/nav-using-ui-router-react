import React from 'react';
import { UISrefActive, UISref, UIView } from '@uirouter/react';

export const Home = () =>{
    return (
        <div className="container" style={{marginTop : '10px'}}>
            <div className="card">
                <div className="card-body">This application demonstrates the integration of ui-router with Create React App</div>
            </div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <UISrefActive class={'active'}><UISref to={'cards'} params={{cardId: '1'}}><li>Cards</li></UISref></UISrefActive>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                            <UISrefActive class={'active'}><UISref to={'cards'} params={{cardId: '2'}}><li>Cards</li></UISref></UISrefActive>
                    </a>
                </li>
            </ul>
            <UIView></UIView>
        </div>
    )
}