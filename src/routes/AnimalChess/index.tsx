import React from 'react'
import { FlipCard } from '../../components/Card/'

export default class AnimalChess extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            flips: [false]
        }
    }

    render() {
        const { flips } = this.state;
        return (
            <div>
                <FlipCard
                    flip={flips[0]}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    frontChildren={<div style={{ backgroundColor: 'paleturquoise', width: '100%', height: '100%' }}>1</div>}
                    backChildren={<div style={{ backgroundColor: 'palegoldenrod', width: '100%', height: '100%' }}>2</div>}
                    onFlip={() => {
                        this.setState({
                            flips: [true]
                        })
                    }}
                />
            </div>
        )
    }
}