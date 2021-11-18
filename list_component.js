(function (){
    //import
    const  TaskComponent = window.TaskComponent;

    let ListComponent = {};
    const listNode = document.createElement('div');
    listNode.className = "todo-list";

    let parentElem = null;

    //hard task Data
    let task1 = new TaskComponent('header', 'in-progress', 'my comment');
    let task2 = new TaskComponent('имя задачи', 'в процессе', 'статус неправильный');
    let task3 = new TaskComponent ('header', 'in-progress', 'my comment');
    let tasks = [task1,task2,task3];

    //private methods
    function addTask(taskData) {
        taskData.forEach(taskElem => {
            taskElem.mount(listNode);
        })
    }
    addTask(tasks);

    //public methods
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

    ListComponent = {
        listNode:listNode,
        tasks:tasks
    }
    //publish methods
    ListComponent.mount = mount.bind(ListComponent);
    ListComponent.unmount = unmount.bind(ListComponent);

    //export
    window.ListComponent = ListComponent;
})()
