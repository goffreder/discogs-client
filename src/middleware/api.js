export const callApi = store => next => action => {
    console.log(store.getState().toJS(), action);

    return next(action);
};
