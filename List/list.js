(function (){
    //import
    const TaskComponent = window.TaskComponent;

    function ListComponent() {
        function update (dataArray) {
            listNode.textContent = '';
            dataArray.forEach((taskData) => {
                const {title, description, status} = taskData;
                let task = new TaskComponent(title,description,status);
                task.mountTask(listNode);
            })
        }

       function mount(parent) {
            if (listNode.hasChildNodes() === true) {
                if (parent instanceof HTMLElement) {
                    parentElem = parent;
                    parentElem.appendChild(listNode);
                } else {
                    console.error("ListComponent: this parent is not correct type");
                }
            }else {
                console.error('ListComponent: List has not task');
            }
        }

        function unmount (parent) {
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
    window.ListComponent = new ListComponent();
})()
