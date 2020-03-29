const initState = {
    projects: [
        {id:'1', title:' naslov 1', content:'bla bla bla'},
        {id:'2', title:' naslov 2', content:'bla bla bla'},
        {id:'3', title:' naslov 3', content:'bla bla bla'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;

        default:
            return state;
    }
    return state;
};

export default projectReducer