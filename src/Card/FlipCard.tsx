import React, { Children } from 'react'
import './FlipCard.less'
import Card from './Card'


export declare type flipCardAxisType = 'left' | 'center' | 'right';

export interface FlipCardProps {
    className?: string,
    type?: string,
    axis?: flipCardAxisType,
    style?: object,
    frontChildren?: any,
    backChildren?: any,
}

export interface FlipCardState {
    isFlip: boolean,
}

export default class FlipCard extends React.Component<FlipCardProps, FlipCardState> {
    public state: FlipCardState;
    constructor(props: FlipCardProps) {
        super(props);
        this.state = {
            isFlip: false,
        }
    }

    onFlip(isFlip: boolean) {
        this.setState({ isFlip })
    }

    render() {
        const { axis, frontChildren, backChildren } = this.props;
        const cardData = { style: this.props.style };
        return (
            <section
                className={`asui-card-flip-box asui-card-flip-${axis || 'center'} ${this.state.isFlip ? 'asui-card-flipped' : ''} ${this.props.className || ''}`}
                onClick={() => this.onFlip(!this.state.isFlip)}
            >
                <Card className={``} {...cardData} >
                    <figure className="asui-card-flip-figure front">{frontChildren}</figure>
                    <figure className="asui-card-flip-figure back">{backChildren}</figure>
                </Card>
            </section>
        )
    }
}
