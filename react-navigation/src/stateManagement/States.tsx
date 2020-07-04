import {Home} from '../modules/Home/Home';
import { Contacts } from '../modules/Contacts/Contacts';
import { Landing } from '../modules/Landing/Landing';
import { Cards } from '../modules/Cards/Cards';

const landingPage  = {
        name: 'landing',
        url: '/landing',
        component: Landing
    };

const homePage  = {
        parent: 'landing',
        name: 'home',
        url: '/Home',
        component: Home
    };

const contactPage ={
        parent: 'landing',
        name: 'contact',
        url: '/Contact/:contactId',
        component: Contacts,
        resolve:{
            contactId: [
                '$transition$',
                ($transition$: any) => {
                    return $transition$.params().contactId;
                }
            ]
        }
};

const cardsSection ={
    parent: 'home',
    name: 'cards',
    url: '/Cards/:cardId',
    component: Cards,
    resolve:{
        cardId: [
            '$transition$',
            ($transition$: any) => {
                return $transition$.params().cardId;
            }
        ]
    }
};


export default [landingPage,homePage,contactPage, cardsSection];
