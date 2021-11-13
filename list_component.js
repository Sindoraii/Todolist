(function (){
    //import
    const taskComponent = window.TaskComponent;

    let ListComponent = {};
    const elem = document.createElement('div');
    elem.className = "todo-list";

    let parentElem = null;

    //hard task Data
    let task1 = new taskComponent.createTask('header', 'in-progress', 'my comment');
    let task2 = new taskComponent.createTask('имя задачи', 'в процессе', 'статус неправильный');
    //test
    console.log( task1 );
    console.log(task2);
    let tasks = [task1,task2];

    //private methods
    function addTask(taskData) {
        taskData.forEach(taskElem => {
            let node = taskElem.elem;
            elem.appendChild(node);
        })
    }
    addTask(tasks);

    //public methods

    function mount(parent) {
        if (parent instanceof HTMLElement) {
            parentElem = parent;
            parentElem.appendChild(this.elem);
        } else {
            console.error("ListComponent: this parent is not correct type");
        }
    }

    function unmount(parent) {
        if (parent === parentElem) {
            this.elem.remove();
        } else {
            console.error('ListComponent: this elem is not parent');
        }
    }

    ListComponent = {
        elem:elem,
        tasks:tasks
    }
    //publish methods
    ListComponent.mount = mount.bind(ListComponent);
    ListComponent.unmount = unmount.bind(ListComponent);

    //export
    window.ListComponent = ListComponent;
})()
