"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies, headers } from "next/headers";

export const handleSubmit = async (formData) => {
    const title = formData.get("title");
    console.log(title);
    const response = await fetch(`${process.env.API_SERVER}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
    });
    if (response.ok) {
        revalidateTag("todo-list");
        cookies().set("todo", title, {
            path: "/",
            maxAge: 1000,
            httpOnly: true,
        })
        return {
            success: true,
        };
    }
    return {
        success: false,

    }
};
// giải quyết đăng nhập nên dùng server action
//3 chỗ lưu được cookies : middleware, router Handle(router.js),serverAction
// validate server : ở client, router , serverAction thư viện zod, yup
