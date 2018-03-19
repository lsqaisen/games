

export default {
    namespace: 'animalchess',
    state: {
        player: 1,
        selected: 0,
        chessmans: [],
        chessboard: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    effects: {

    },
    reducers: {
        saveState(state, { payload }) {
            return { ...state, ...payload };
        },
        init(state) {
            let chessmans = [];
            while (chessmans.length < 24) {
                let key = 0;
                while (!key) {
                    key = Math.floor(Math.random() * 25 - 12);
                    if (chessmans.some(v => v.key === key)) key = 0;
                }
                let x = chessmans.length % 6;
                let y = Math.floor(chessmans.length / 6);
                chessmans.push({
                    position: { x, y },
                    key,
                    flip: false
                })
            }
            return {
                ...state,
                chessmans,
            };
        },

        flip(state, { payload: { index } }) {
            let { chessmans } = state;
            chessmans[index].flip = true;
            return {
                ...state,
                chessmans,
            }
        },

        selected(state, { payload }) {
            return {
                ...state,
                selected: payload,
            }
        },

        changePlayer(state) {
            return {
                ...state,
                selected: 0,
                player: state.player === 1 ? -1 : 1,
            }
        },

        move(state, { payload }) {
            let chessmans = [];
            state.chessmans.forEach(v => {
                if (v.key !== payload) {
                    chessmans.push(v);
                } else {
                    state.chessmans[state.chessmans.findIndex(v => v.key === state.selected)].position = v.position;
                }
            })
            return {
                ...state,
                chessmans,
                selected: 0,
                player: state.player === 1 ? -1 : 1,
            }
        },

        eat(state, { payload: { eater } }) {
            return ({

            })
        }
    }
}
