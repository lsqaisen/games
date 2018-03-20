
import React from 'react'
import './Chessboard.less'

export default class Board extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    

    render() {
        const { children } = this.props;
        return (
            <div className="gobang-box">
                <div className="chessboard-content">
                    {children}
                </div>
            </div>
        )
    }
}