const initState = {
    projects: [
        {id:'1', title:' naslov 1', content:'bla bla bla'},
        {id:'2', title:' naslov 2', content:'bla bla bla'},
        {id:'3', title:' naslov 3', content:'bla bla bla'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
};

export default projectReducer