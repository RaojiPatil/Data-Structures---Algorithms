const addcount = {type: "INC_COUNT", payload: 1 };
const deccount = {type: "DEC_COUNT", payload: 1 };



class store {
    constructor (reducer, init) {
        this.reducer= reducer;
        this.state = init;
    }

    getState() {
        return this.state;
    }
    dispatch(actions);
}


const reducer = () => {};
const store = new Store(reducer, {count:0, todo: []});

console.log(store.getState);
