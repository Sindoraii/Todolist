(function () {
    function DataSource() {
        //public methods
        function subscribe(listener) {
            this.listeners.push(listener);
            listener(this.data);
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
                newData.push({
                    id: `${this.data.length}${Date.now()}`,
                    ...task,
                });
                this.update(newData);
            } else {
                console.error('DataSource: Data is not correct.');
            }
        }

        function deleteTask(taskId){
            const index = this.data.findIndex((item)=>{
                return item.id === taskId;
            })
            if(index !== -1) {
                const newData = [...this.data];
                newData.splice(index,1);
                this.update(newData);
            }
        }

        this.data = [];
        this.listeners = [];
        this.subscribe = subscribe.bind(this);
        this.update = update.bind(this);
        this.addTask = addTask.bind(this);
        this.deleteTask = deleteTask.bind(this);
    }
    //export
    window.DataSource = new DataSource();
})()
