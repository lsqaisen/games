import React from 'react'
import { Router, Route } from 'dva/router'

import App, { Layout } from './layout'

export default function ({ history }: any) {
    return <Router history={history}>
        <Layout>
            <Route path="/filpcard" render={() => <div> xxx</div>} />
            <Route path="/home" render={() => <App />} />
        </Layout>
    </Router>
}