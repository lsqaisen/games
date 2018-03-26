
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
//分值
var Scores = [
    100000,     //长连
    10000,      //活4、双冲4、冲4活
    5000,       //双活3
    1000,       //活3眠3
    500,        //眠4
    200,        //活3
    100,        //双活2
    50,         //眠3
    10,         //活2眠2
    5,          //活2
    3,          //眠2
    -5          //死4,死3,死2
];

//棋型
var ChessShape = [[
    [/11111/g], [/22222/g] //连五,1
], [
    [/011110/g], [/022220/g]//活四,2
], [
    [/011112/g, /0101110/g, /0110110/g], [/022221/g, /0202220/g, /0220220/g]//冲四,3
], [
    [/01110/g, /010110/g], [/02220/g, /020220/g]//活三,4
], [
    [/001112/g, /010112/g, /011012/g, /10011/g, /10101/g, /2011102/g], [/002221/g, /020221/g, /022021/g, /20022/g, /20202/g, /1022201/g] //眠三,5
], [
    [/00110/g, /01010/g, /010010/g], [/00220/g, /02020/g, /020020/g]//活二,6
], [
    [/000112/g, /001012/g, /010012/g, /10001/g, /2010102/g, /2011002/g], [/000221/g, /002021/g, /020021/g, /20002/g, /1020201/g, /1022001/g]//眠二,7
], [
    [/211112/g, /21112/g, /.2112./g], [/122221/g, /12221/g, /12221/g, /.1221./g] //死2二、三、四,8
]];

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

function Eveluate(board, type) {
    let record = -99999, pos = { x: -1, y: -1 };
    board.forEach((pos, x) => {
        pos.forEach((v, y) => {
            if (v === 0) {
                let _record = AnalysisPos(board, { x, y }, type);
                if (record <= _record) {
                    record == _record;
                    pos.x = x;
                    pos.y = y;
                }
            }
        })
    })
}

function AnalysisPos(board, { x, y }, value) {
    let _board = [];
    for (var i = 0; i < 15; i++) {
        _board[i] = Object.assign([], board[i]);
    }
    _board[x][y] = value;
    let type = [-1, -1, -1, -1], position, num = 0;
    type[0] = AnalysisLine(_board[y], x, value);
    type[1] = AnalysisLine(_board.map(v => v[x]), y, value);
    // position = [];

    // type[2] = AnalysisLine(board.map(v => v[x]), y, value);
    console.log(type)
    return -99999;
}

function AnalysisLine(position, index, type) {
    let s = 0, e = position.length - 1;
    if (index - 4 <= 0) s = 0;
    else s = index - 4;
    if (index + 4 >= e) e = position.length - 1;
    else e = index + 4;
    let chessStyle = position.join('').slice(s, e);
    let record = -1;
    ChessShape.forEach((v, index) => {
        console.log(chessStyle)
        if ((v[type - 1]).some(_v => _v.test(chessStyle))) {
            // console.log(chessStyle)
            record = index;
        }
    })
    return record;
}

export default {
    namespace: 'gobang',
    state: {
        aiType: 2,
        curPlayer: 1,
        board: [],
        TypeRecord: [],
    },
    effects: {

    },
    reducers: {
        init(state) {
            let board = [];
            for (var i = 0; i < 15; i++) {
                board[i] = []
                for (var j = 0; j < 15; j++) {
                    board[i][j] = null;
                }
            }
            return { ...state, board }
        },
        move(state, { payload: { X, Y } }) {
            let { board, curPlayer, aiType } = state;
            console.log(board)
            // if (curPlayer === aiType) Eveluate(board, curPlayer);
            if (!board[X][Y]) board[X][Y] = curPlayer;
            curPlayer = curPlayer === 1 ? 2 : 1;
            return { ...state, board, curPlayer }
        },
    }
}