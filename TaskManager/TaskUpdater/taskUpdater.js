(function (){

    class TaskUpdater{
        constructor(dataSource) {
            this.dataSource = dataSource;
        }

        delete(index){
            this.dataSource.deleteTask(index);
        }
    }

    window.TaskUpdater = TaskUpdater;
})()
