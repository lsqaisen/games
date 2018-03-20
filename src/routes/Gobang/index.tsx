import React from 'react'
import { connect } from 'dva'
import './index.less'

class Gobang extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    drawMap(_map:any) {
        let map = [], count = 0;
        for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 14; j++) {
                map[count++] = <div key={count} className="unit" style={{ top: i * 24, left: j * 24 }}></div>
            }
        }
        return map;
    }

    componentWillMount() {
    }

    render() {
        const { gobang, dispatch } = this.props;
        const { map } = gobang;
        return (
            <div className="gobang-box">
                {this.drawMap('')}
            </div>
        )
    }
}

export default connect(props => props)(Gobang)