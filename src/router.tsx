import React from 'react'
import { Router, Route } from 'dva/router'

import App, { Layout } from './layout'

import AnimalChess from './routes/AnimalChess/'
import Gobang from './routes/Gobang/'

export default function ({ history }: any) {
    return <Router history={history}>
        <Layout>
            <Route path="/gobang" component={Gobang} />
            <Route path="/animalchess" component={AnimalChess} />
            <Route path="/filpcard" render={() => <div> xxx</div>} />
            <Route path="/home" render={() => <App />} />
        </Layout>
    </Router>
}