(function () {
    /* import */
    const TaskViewComponent = window.TaskViewComponent;

    function ListComponent() {
        /**
         *  Updating list
         *  @param {Array} dataArray - <[{title, description, status: open | in-progress | complete | decline",id}]>
         * */
        function update(dataArray) {
            listNode.textContent = '';

            dataArray.forEach((taskData) => {
                const {title, description, status, id} = taskData;
                let task = new TaskViewComponent(title, description, status, id);
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

        /* init list instance */
        const listNode = document.createElement('section');
        listNode.className = "todo-list";
        let parentElem = null;


        /* PUBLISH METHODS */
        this.update = update.bind(this);
        this.mount = mount.bind(this);
        this.unmount = unmount.bind(this);
    }


    /* export */
    window.ListComponent = new ListComponent();
})()
