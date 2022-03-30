(function () {
    /* import */
    const dataSource = window.DataSource;
    function DataSourceAdapter() {
        /**
         * Adapting task format for DataSource
         * @param {string} taskName
         * @param {string} taskDeck
         */
        function adaptTask(taskName, taskDeck) {
            const task = {title: taskName, description: taskDeck, status: 'open'};
            const taskCopy = JSON.parse(JSON.stringify(task));
            dataSource.addTask(taskCopy);
        }

        this.adaptTask = adaptTask.bind(this);
    }


    /* export */
    window.DataSourceAdapter = new DataSourceAdapter();
})();
