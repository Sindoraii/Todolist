(function () {
    //import
    const dataSource = window.DataSource;

    function DataSourceAdapter() {
        function adaptTask(taskName, taskDeck) {
            const task = {title: taskName, description: taskDeck, status: 'open'}
            dataSource.addTask(task);
        }
        this.adaptTask = adaptTask.bind(this);
    }
    //export
    window.DataSourceAdapter = new DataSourceAdapter();
})();
