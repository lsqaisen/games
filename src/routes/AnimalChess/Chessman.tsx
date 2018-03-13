
import React from 'react'
import { FlipCard } from '../../components/Card/'
import './Chessman.less'

export default class Chessman extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, selected, mayEaten, flip, position, onFlip, onSelected, onEaten } = this.props;
        return (
            <FlipCard
                className={`chessman-box ${flip ? 'chessman-flip' : ''} ${mayEaten ? 'chessman-may-eaten' : ''} ${selected === name ? 'chessman-selected' : ''}`}
                flip={flip}
                style={{
                    top: `${position.y * 110}px`,
                    left: `${position.x * 110}px`,
                }}
                frontChildren={<div className="chessman-front" >0</div>}
                backChildren={(
                    <div
                        className={`chessman-back ${name < 0 ? 'chessman-black' : 'chessman-white'}`}
                        onClick={() => {
                            onSelected(name);
                            if (mayEaten) onEaten(name);
                        }}
                    >
                        {name}
                    </div>
                )}
                onFlip={onFlip}
            />
        )
    }
}