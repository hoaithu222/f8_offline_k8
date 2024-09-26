
const BASE_URL = 'https://api-todo-ebon.vercel.app/api/v1';

export async function getApiKey(email) {
    try {
        const url = `${BASE_URL}/api-key?email=${encodeURIComponent(email)}`;
        console.log("email:", email);
        const response = await fetch(url);
        const data = await response.json();
        console.log("API key response:", data);
        return data?.data?.apiKey;
    } catch (e) {
        console.log(e)
    }
}

export async function fetchTodos(apiKey) {
    try {
        console.log("API key:", apiKey);
        const response = await fetch(`${BASE_URL}/todos`, {
            headers: {
                'X-Api-Key': apiKey,
            },
        });
        const result = await response.json();
        console.log("todos:", result);
        return result;
    }
    catch (e) {
        console.log(e)
    }
}

export const addTodo = async (apiKey, todo) => {
    try {
        const url = 'https://api-todo-ebon.vercel.app/api/v1/todos';

        if (!todo || !todo.todo || todo.todo.trim() === '') {
            throw new Error('Todo không được để trống');
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': apiKey
            },
            body: JSON.stringify(todo)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Lỗi từ API:", errorData);
            throw new Error(errorData.message || 'Unknown error');
        }

        return response.json();
    }
    catch (e) {
        console.log(e);
    }
};
export async function updateTodo(apiKey, id, updatedTodo) {
    try {
        console.log("Update todo ID:", id, "data:", updatedTodo);

        const response = await fetch(`${BASE_URL}/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': apiKey,
            },
            body: JSON.stringify(updatedTodo),
        });


        if (!response.ok) {
            const errorData = await response.json();
            console.error("Lỗi từ API:", errorData);
            throw new Error(errorData.message || 'Unknown error');
        }

        const result = await response.json();
        console.log("Todo updated response:", result);

        if (!result || !result.data) {
            throw new Error("Phản hồi từ API không chứa dữ liệu mong đợi");
        }

        return result;
    } catch (e) {
        console.log(e)
    }
}


export async function deleteTodo(apiKey, id) {
    try {
        console.log("Deleting todo ID:", id);
        const response = await fetch(`${BASE_URL}/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'X-Api-Key': apiKey,
            },
        });
        const result = await response.json();
        console.log("Todo deleted:", result);
        return result;
    }
    catch (e) {
        console.log(e)
    }
}


export async function findTodo(apiKey, param) {
    try {
        const response = await fetch(`${BASE_URL}/todos?q=${param}`, {
            headers: {
                'X-Api-Key': apiKey,
            },
        });
        const result = await response.json();
        return result;
    }
    catch (e) {
        console.log(e)
    }
}