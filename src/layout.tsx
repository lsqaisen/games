import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'dva/router'
import './index.less'

import { Card, FlipCard, PileCard } from './components/Card/'

const App = () => {
    return (
        <div>
            <div className='row'>
                <Card></Card>
            </div>
            <div className='row'>
                <div className='col'>
                    <FlipCard
                        axis='center'
                        frontChildren={<p>font1</p>}
                        backChildren={<p>back1</p>}
                    />
                </div>
                <div className='col'>
                    <FlipCard
                        axis='right'
                        frontChildren={<p>font2</p>}
                        backChildren={<p>back2</p>}
                    />
                </div>
                <div className='col'>
                    <FlipCard
                        axis='left'
                        frontChildren={<p>font3</p>}
                        backChildren={<p>back3</p>}
                    />
                </div>
            </div>

            <div className='row'>
                <PileCard list={'asdasdxxxxxxxxxxxxxxxxx'.split('')} />
            </div>
        </div>
    )
}

export default App


export class Layout extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                <Link to="/home">home</Link>
                <Link to="/filpcard">filpcard</Link>
                <Link to="/animalchess">animalchess</Link>
                {children}
            </div>
        )
    }
}