import React from 'react'
import { connect } from 'dva'
import Chessboard from './Chessboard'
import Chessman from './Chessman'

class AnimalChess extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            flips: [false]
        }
    }

    checkMayEaten(index, selectedIndex) {
        if (selectedIndex === -1) return false;
        else {
            let a = selectedIndex - index;
            if (a === -1 || a === 1 || a === -6 || a === 6) return true;
        }
        return false;
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch({ type: 'animalchess/init' });
    }

    render() {
        const { animalchess, dispatch } = this.props;
        const { player, selected, chessboard, chessmans } = animalchess;
        console.log(chessmans)
        return (
            <div>
                <button onClick={() => dispatch({ type: 'animalchess/changePlayer' })} >switch</button>
                <Chessboard>
                    {chessmans.map((v, index) => <Chessman
                        key={v.key}
                        selected={selected}
                        mayEaten={player * v.key < 0 ? this.checkMayEaten(index, chessmans.findIndex(v => v.key === selected)) : false}
                        name={v.key}
                        flip={v.flip}
                        position={v.position}
                        onFlip={() => !v.flip && dispatch({ type: 'animalchess/flip', payload: { index } })}
                        onSelected={(selected) => player * selected > 0 && dispatch({ type: 'animalchess/selected', payload: selected })}
                        onEaten={(name) => dispatch({ type: 'animalchess/eaten', payload: name })}
                    />)}
                </Chessboard>
            </div>
        )
    }
}

export default connect(props => props)(AnimalChess)