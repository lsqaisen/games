import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'dva'
import './index.less'

class Gobang extends React.Component<any, any>{
    mapRef: any;
    constructor(props: any) {
        super(props);
        this.mapRef = null
        this.state = {
        }
    }

    drawMap() {
        let mapBox = ReactDOM.findDOMNode(this.mapRef);
        let map = [], count = 0;
        for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 14; j++) {
                map[count++] = `<div key={count} class="unit" style="top:${i * 24}px; left:${j * 24}px"></div>`
            }
        }
        mapBox.innerHTML = map.join('')
    }

    bindClick() {
        const { dispatch } = this.props;
        this.mapRef.onclick = (e) => {
            e = event || window.event;
            e.cancelBubble = true;
            e.stopPropagation();
            let X = Math.floor(e.layerX / 24),
                Y = Math.floor(e.layerY / 24);
            dispatch({
                type: 'gobang/move',
                payload: { X, Y }
            })
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({ type: 'gobang/init' })
        this.bindClick()
    }

    render() {
        const { gobang, dispatch } = this.props;
        const { board } = gobang;
        return (
            <div className="gobang-box" ref={(ref) => this.mapRef = ref}>
                {board.map((x, left) => x.map((y, top) => {
                    if (y === 1) {
                        return (
                            <div
                                key={`${left}${top}`}
                                className="unit hei"
                                style={{ top: `${top * 24}px`, left: `${left * 24}px` }}
                                ref={(ref) => ref && (ref.onclick = (e) => {
                                    e.cancelBubble = true;
                                })}
                            ></div>
                        )
                    } else if (y === 2) {
                        return (
                            <div
                                key={`${left}${top}`}
                                className="unit bai"
                                style={{ top: `${top * 24}px`, left: `${left * 24}px` }}
                                ref={(ref) => ref && (ref.onclick = (e) => {
                                    e.cancelBubble = true;
                                })}
                            ></div>
                        )
                    }
                    return (
                        <div
                            key={`${left}${top}`}
                            className="unit"
                            style={{ top: `${top * 24}px`, left: `${left * 24}px` }}
                        ></div>
                    )
                }))}
            </div>
        )
    }
}

export default connect(props => props)(Gobang)