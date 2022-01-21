(function () {
    function DataSource() {
        //public methods
        function subscribe(listener) {
            this.listeners.push(listener);
        }

        /**
         * @param data - Array<{title, description, status: open | inProgress | complete | decline"}>
         *     */
        function update(data) {
            if(data && Array.isArray(data)) {
                this.data = data;
                this.listeners.forEach(listener => {
                    listener(this.data);
                })
            } else {
                console.error('DataSource: Data is not correct.');
            }
        }

        /**
         * @param task - {title, description, status}*/
        function addTask(task) {
            if(task && typeof task === 'object') {
                const newData = [...this.data];
                newData.push(task);
                this.update(newData);
            } else {
                console.error('DataSource: Data is not correct.');
            }
        }

        this.data = [];
        this.listeners = [];
        this.subscribe = subscribe.bind(this);
        this.update = update.bind(this);
        this.addTask = addTask.bind(this);
    }
    //export
    window.DataSource = new DataSource();
})()
