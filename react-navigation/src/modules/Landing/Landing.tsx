import React from 'react';
import { NavigationBar } from '../NavBar/NavigationBar';
import { UIView } from '@uirouter/react';

/** This component renders outermost chrome
 * It has a 'UIView' to support nested states to fill in
 */

export const Landing = () =>{
    return (
        <div>
            Welcome to landing page!!!
            <NavigationBar />
            <UIView />
        </div>
    )
}