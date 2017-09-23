import React from 'react'
import ReactDOM from 'react-dom'

import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'


import Main from './main/Main'
import rootReducer from './main/reducers'

/*&
let devTools =  window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__()
let store  = createStore(
            rootReducer,
            compose(
                applyMiddleware ( thunk, promise, multi ) ),
                window.devToolsExtension ? window.devToolsExtension() : f => f
            )
*/

let store  = createStore(
    rootReducer,
    applyMiddleware ( thunk, promise, multi ) 
)


ReactDOM.render(
    <Provider store={store} >
        <Main />
    </Provider>
    ,document.getElementById('app')
)

