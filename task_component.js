(function () {
    let  TaskComponent = {};

    const elem = document.createElement('div');
    elem.className = 'todo-task';

    let parentElem = null;

    //header
    const taskName = document.createElement('div');
    taskName.innerText = 'New task';
    taskName.className = 'todo-task_header';
    elem.appendChild(taskName);

    //wrapper with task content
    const wrapperRow = document.createElement('div');
    wrapperRow.className = 'todo-task_wrapper';
    elem.appendChild(wrapperRow);

    //status
    const taskStatus = document.createElement('div');
    taskStatus.className = 'todo-task_status';
    wrapperRow.appendChild(taskStatus);

    //description
    const taskDesc = document.createElement('input');
    taskDesc.placeholder = 'Add comment...';
    taskDesc.readOnly = true;
    taskDesc.className = 'todo-task_desc';
    wrapperRow.appendChild(taskDesc);

    //changing status button
    const taskButton = document.createElement('button');
    taskButton.className = 'todo-task_status todo-task_status_button-change';
    taskButton.innerText = 'change status';
    wrapperRow.appendChild(taskButton);

    //public methods
    function mount(parent) {
        if (parent instanceof HTMLElement) {
            parentElem = parent;
            parentElem.appendChild(this.elem);
        } else {
            console.error("TaskComponent: this parent is not correct type");
        }
    }

    function unmount(parent) {
        if (parent === parentElem) {
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

    //publish methods
    TaskComponent.unmount = unmount.bind(TaskComponent);
    TaskComponent.mount = mount.bind(TaskComponent);

    //export
    window.TaskComponent = TaskComponent;
})()
