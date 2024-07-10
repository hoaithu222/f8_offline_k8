var F8 = {
    createElement: function (name, attributes = {}, ...children) {
        var element = document.createElement("name");
        Object.keys(attributes).forEach(function (key) {
            if (key.startsWith("on")) {
                var eventName = key.toLocaleLowerCase().replace("on", "");
                element.addEventListener(eventName, attributes[key]);
            }
            else {
                element[key] = attributes[key];
            }
        });
        if (children.length) {
            children.forEach(function (item) {
                element.append(item);

            });
        }
        return element;
    },
    render: function (rootEl, node) {
        root.innerText = "";//Reset đảm bảo trong root khong có gì
        rootEl.append(node);
    },


}; 