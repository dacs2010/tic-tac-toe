import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function formatUser(user){
    return user.firstName + ' ' +  user.lastName;
}


const user = {
    firstName: '∂ß',
    lastName: ''
};

const element = (
   <div> tabIndex='0'</div>
);


function getGreeting(user) {
    if (user) {
        return <h1>Hello,{formatUser(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>
}


ReactDOM.render(
    element,
    document.querySelector('#root')
);
