import React, { Children } from 'react'
import './FlipCard.less'
import Card from './Card'


export declare type flipCardAxisType = 'left' | 'center' | 'right';

export interface FlipCardProps {
    flip?: boolean,
    className?: string,
    type?: string,
    axis?: flipCardAxisType,
    style?: object,
    frontChildren?: any,
    backChildren?: any,
    onFlip?: () => any,
}

export default class FlipCard extends React.Component<FlipCardProps, {}> {
    static defaultProps: {
        flip: false,
    }

    constructor(props: FlipCardProps) {
        super(props);
    }

    onFlip(isFlip: boolean) {
        this.setState({ isFlip })
    }

    render() {
        const { flip, axis, frontChildren, backChildren, onFlip } = this.props;
        const cardData = { style: this.props.style };
        return (
            <section
                className={`asui-card-flip-box asui-card-flip-${axis || 'center'} ${flip ? 'asui-card-flipped' : ''} ${this.props.className || ''}`}
                {...cardData}
                onClick={onFlip}
            >
                <Card className={``} >
                    <figure className="asui-card-flip-figure front">{frontChildren}</figure>
                    <figure className="asui-card-flip-figure back">{backChildren}</figure>
                </Card>
            </section>
        )
    }
}
