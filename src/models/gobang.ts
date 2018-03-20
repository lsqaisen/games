
const GRID_NUM = 15 //每一行(列)的棋盘交点数
const GRID_COUNT = 225//棋盘上交点总数
const BLACK = 0 //黑棋用0表示
const WHITE = 1 //白棋用1表示
const NOSTONE = '+'  //没有棋子
//这组宏定义了用以代表几种棋型的数字
const STWO = 1  //眠二
const STHREE = 2  //眠三
const SFOUR = 3  //冲四
const TWO = 4  //活二
const THREE = 5  //活三
const FOUR = 6  //活四
const FIVE = 7  //五连
const NOTYPE = 11 //未定义
const ANALSISED = 255//已分析过的
const TOBEANALSIS = 0  //已分析过的

const PosValue = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0],
    [0, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1, 0],
    [0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 4, 3, 2, 1, 0],
    [0, 1, 2, 3, 4, 5, 6, 6, 6, 5, 4, 3, 2, 1, 0],
    [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0],
    [0, 1, 2, 3, 4, 5, 6, 6, 6, 5, 4, 3, 2, 1, 0],
    [0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 4, 3, 2, 1, 0],
    [0, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1, 0],
    [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]



//这个宏用以检查某一坐标是否是棋盘上的有效落子点
function IsValidPos(x, y) {
    return ((x >= 0 && x < GRID_NUM) && (y >= 0 && y < GRID_NUM))
}

//定义了枚举型的数据类型，精确，下边界，上边界
enum ENTRY_TYPE { exact, lower_bound, upper_bound };

interface Node {
    x: number,
    y: number,
}

interface StonePosition {
    x: number,
    y: number,
}

interface MoveStone {
    nRenjuID: number,
    ptMovePoint: Node,
}

interface StoneMove {
    StonePos: StonePosition,
    Score: number,
}

export default {
    namespace: 'gobang',
    state: {
        map: [],
    },
    effects: {

    },
    reducers: {
        init(state) {
            let map = [];
            for (var i = 0; i < 15; i++) {
                map[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            }
            return {
                ...state,
                map,
            }
        },
        eveluate(state, { payload: { position, bIsWhiteTurn } }) {
            let { TypeCount, count } = state,
                i, j, k, nStoneType;
            count++;
            return {

            }
        }
    }
}