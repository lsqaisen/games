import React from 'react'
import './PileCard.less'
import Card from './Card'

export interface PileCardProps {
    list?: any[],
}

export default class PileCard extends React.Component<PileCardProps, any> {
    static defaultProps: {
        list: any[],
    }

    constructor(props: PileCardProps) {
        super(props);
        this.state = {
            hover: false,
            cardHover: (props.list || []).map(v => false),
        }
    }

    render() {
        const { list = [] } = this.props;
        let { hover, cardHover } = this.state;
        return (
            <div
                className={`asui-pilecard-box`}
                onMouseOver={(e) => { this.setState({ hover: true }) }}
                onMouseOut={(e) => { this.setState({ hover: false }) }}
            >
                {list.map((v, index) => {
                    let left = `${(list.length - (list.length - index <= 4 ? index : list.length) - 1) * 2}px`,
                        top = `${-(list.length - (list.length - index <= 4 ? index : list.length) - 1) * 2}px`;
                    if (hover) {
                        left = `${(list.length - index - 1) * 24}px`;
                        top = `0px`;
                    }
                    return (
                        <Card
                            key={index}
                            style={{ left, top }}
                        >
                            {index}
                        </Card>
                    )
                })
                }
            </div >
        )
    }
}