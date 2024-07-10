document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("root");

    var nav = document.createElement("nav");
    var ul = document.createElement("ul");

    var menuItems = [
        { text: "Home", link: "#" },
        { text: "About", link: "#" },
        {
            text: "Services", link: "#", dropdown: [
                { text: "Web Development", link: "#" },
                { text: "App Development", link: "#" },
                { text: "SEO", link: "#" }
            ]
        },
        { text: "Contact", link: "#" }
    ];

    menuItems.forEach(function (item) {
        var li = document.createElement("li");

        if (item.dropdown) {
            li.className = "dropdown";
            var a = document.createElement("a");
            a.href = item.link;
            a.innerText = item.text;
            li.appendChild(a);

            var dropdownContent = document.createElement("div");
            dropdownContent.className = "dropdown-content";

            item.dropdown.forEach(function (subItem) {
                var subA = document.createElement("a");
                subA.href = subItem.link;
                subA.innerText = subItem.text;
                dropdownContent.appendChild(subA);
            });

            li.appendChild(dropdownContent);
        } else {
            var a = document.createElement("a");
            a.href = item.link;
            a.innerText = item.text;
            li.appendChild(a);
        }

        ul.appendChild(li);
    });

    nav.appendChild(ul);
    root.appendChild(nav);
});

