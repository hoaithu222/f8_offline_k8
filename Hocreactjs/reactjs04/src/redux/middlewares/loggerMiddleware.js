export const loggerMiddleware = (store) => {
    return (next) => {
        return (action) => {
            // console.log(store, action);
            next(action);
        }
    }
}