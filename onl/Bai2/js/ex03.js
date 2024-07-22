document.addEventListener('DOMContentLoaded', (event) => {
    const list = document.getElementById('sortable-list');
    let draggingElement = null;
    let placeholder = document.createElement('li');
    placeholder.className = 'sortable-item placeholder';
    let mouseOffsetY = 0;

    list.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('sortable-item')) {
            draggingElement = e.target;
            mouseOffsetY = e.clientY - draggingElement.getBoundingClientRect().top;
            draggingElement.classList.add('dragging');
            placeholder.style.height = `${draggingElement.clientHeight}px`;
            list.insertBefore(placeholder, draggingElement.nextSibling);
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }
    });

    function onMouseMove(e) {
        e.preventDefault();
        draggingElement.style.position = 'absolute';
        draggingElement.style.top = `${e.clientY - mouseOffsetY}px`;
        const afterElement = getDragAfterElement(list, e.clientY);
        if (afterElement == null) {
            list.appendChild(placeholder);
        } else {
            list.insertBefore(placeholder, afterElement);
        }
    }

    function onMouseUp() {
        draggingElement.classList.remove('dragging');
        draggingElement.style.position = 'static';
        list.insertBefore(draggingElement, placeholder);
        list.removeChild(placeholder);
        draggingElement = null;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        updateOrder();
    }

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.sortable-item:not(.dragging):not(.placeholder)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    function updateOrder() {
        const items = list.querySelectorAll('.sortable-item');

        items.forEach((item, index) => {
            var content = item.innerText;
            item.textContent += ` ${index + 1}`;
        });
    }
});