export const clearCacheByPath = async (path) => {
    const response = await fetch(`/api/cache`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "path", value: path }),
    });
    return response.ok;
}
export const clearCacheByTags = async (tag) => {
    const response = await fetch(`/api/cache`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "tags", value: tag }),
    });
    return response.ok;
}