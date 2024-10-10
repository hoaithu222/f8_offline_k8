export const initialState = {
    count: 0,
    todoList: [],
    postList: [],
    token: localStorage.getItem("accessToken") || "",
    user: "",
};
export const rootReducer = (state, action) => {
    switch (action.type) {
        case "counter/increment":
            return {
                ...state,
                count: state.count + 1,
            }
        case "counter/decrement":
            return {
                ...state,
                count: state.count - 1,
            }
        case "todo/add": {
            return {
                ...state, todoList: [...state.todoList, action.payload]
            }
        }
        case "post/update": {
            return {
                ...state, postList: action.payload,
            }
        }
        case "login": {
            return {
                ...state, token: action.payload,
            }
        }
        case "getUser": {
            return {
                ...state, user: action.payload,
            }
        }
        default:
            return state;
    }
}

/*
Vấn đề
1.Chỉ có 1 reducer ==> File reducer sẽ bị rối --> Tách reducer sau đó nối lại (để sau khá khó)
2.State sẽ chứa toàn bộ state của dự án ==> Quá trình cần lấy dữ liệu trong 1 Component sẽ khó khăn 
Giải pháp tạo 2 hook riêng tương ứng với chức năng dịch vụ :có thể gọi các hook khác
- useDispatch() ==> Trả về hàm dispatch trên store
- useSelector(callback) ==> Trả về state mà bạn muốn lọc 
3. Action Object : Đang truyền thủ công  ===> Gặp vấn đề khi maintain dự án --> Giải Pháp tạo 1 hàm trả về action Object 
---> Hàm Action Creator
==> Không callapi được phải call ở dưới và cập nhật lên
- Middleware --> lọc action  - sử dụng để ghi lại nhật kí hoạt động, liên quan đến api  ==> Call api 
- Ở middleware sẽ có một dispatch khác
-- Gửi request --> response


*/