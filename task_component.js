(function (){
     let TaskComponent = {};

        let elem = document.createElement('div');
        elem.className = 'todo_task';

        let parentElem = null;

        //header
        let taskName = document.createElement('div');
        taskName.innerText = 'New task';
        taskName.className = 'todo_task_header';
        elem.appendChild(taskName);

        //status
        let taskStatus = document.createElement('div');
        taskStatus.className = 'todo_task_status';
        elem.appendChild(taskStatus);


        //public methods

        function mount(parent) {
            if(parent instanceof HTMLElement) {
                parentElem = parent;
                parentElem.appendChild(this.elem);

            } else {
                console.error("TaskComponent: this parent is not correct type");
            }
        }

        function unmount(parent) {
            if(parent === parentElem) {
                this.elem.remove();
            } else {
                console.error('TaskComponent: this elem is not parent');
            }
        }

        TaskComponent = {
            elem: elem,
            header: taskName,
            status: taskStatus
        };

    //bind context
    TaskComponent.unmount = unmount.bind(TaskComponent);
    TaskComponent.mount = mount.bind(TaskComponent);

    //export
    window.TaskComponent = TaskComponent;
})()