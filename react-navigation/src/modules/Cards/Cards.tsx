import React from 'react';
import { Transition } from '@uirouter/react';

interface ICardsProps{
    $stateParams:{
        cardId: string;
    };
    $transition$ : Transition;
}

export const Cards = (ICardsProps: any) =>{
    const {cardId} = ICardsProps;
    return (
            <div className="card" style={{textAlign: "left"}}>
                <div className="card-body">{ `Hello cardId : ${cardId}` }</div>
            </div>
    );
};