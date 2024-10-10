export const getPosts = () => {
    return async (dispatch) => {
        // console.log(`getPost`);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await response.json();
        console.log(data);
        dispatch({
            type: "post/update",
            payload: data,
        })

    }

}
export const getToken = (data) => {
    return async (dispatch) => {
        const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error("Thông tin không hợp lệ")
        }
        const result = await response.json();
        console.log(result);
        localStorage.setItem("accessToken", result.access_token);
        dispatch({
            type: "login",
            payload: result,
        })
    }
}
export const getProfile = (token) => {
    return async (dispatch) => {
        const response = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        const result = await response.json();
        console.log(result);
        dispatch({
            type: "getUser",
            payload: result,
        })
    }
}
// Thunk Function


// React.memo
// useMemo
// useCallback