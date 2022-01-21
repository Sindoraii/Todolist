(function () {
    function ListComponent() {
        function update(taskComponentsArray) {
            listNode.textContent = '';
            taskComponentsArray.forEach((task) => {
                task.mountTask(listNode);
            })
        }

        function mount(parent) {
            if (parent instanceof HTMLElement) {
                parentElem = parent;
                parentElem.appendChild(listNode);
            } else {
                console.error("ListComponent: this parent is not correct type");
            }
        }

        function unmount(parent) {
            if (parent === parentElem) {
                listNode.remove();
            } else {
                console.error('ListComponent: this elem is not parent');
            }
        }

        const listNode = document.createElement('div');
        listNode.className = "todo-list";

        let parentElem = null;

        this.update = update.bind(this);
        this.mount = mount.bind(this);
        this.unmount = unmount.bind(this);
    }

    //export
    window.ListComponent = ListComponent;
})()
