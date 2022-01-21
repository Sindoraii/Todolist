(function () {
    // import
    const ListComponent = window.ListComponent;
    const TaskUpdater = window.TaskUpdater;
    const TaskComponent = window.TaskComponent;

    class TaskManager {
        constructor(dataSource, parent) {
            this.dataSource = dataSource;
            this.list = new ListComponent();
            this.updater = new TaskUpdater(this.dataSource);
            this.dataSource.subscribe(this.update);
            this.list.mount(parent);
        }

        update = (dataArray) => {
            const components = dataArray.map((taskData)=>{
                const {id, title, description, status} = taskData;
                return new TaskComponent(id, title, description, status, this.updater);
            })
            this.list.update(components);
        }
    }

    // export
    window.TaskManager = TaskManager;

})()
