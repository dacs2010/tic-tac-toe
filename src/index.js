import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


function formatUser(user){
    return user.firstName + ' ' +  user.lastName
}


const user = {
    firstName: 'David',
    lastName: 'Sedgwick'
}

const element = (
    <h1>
        Hello {formatUser(user)}!
    </h1>
)






ReactDOM.render(
    element,
    document.querySelector('#root')
)
