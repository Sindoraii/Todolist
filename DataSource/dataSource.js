(function () {
    function DataSource() {
        /* PUBLIC METHODS */
        function subscribe(listener) {
            this.listeners.push(listener);
            listener(this.data);
        }

        /**
         * Updating listeners
         * @param {Array} tasks -  <{title, description, status: open | inProgress | complete | decline", id}>>
         **/
        function update(tasks) {
            if (tasks && Array.isArray(tasks)) {
                let tasksCopy = getCopyOfTasks(tasks);
                this.tasks = tasksCopy;


                /* give ID to task */
                this.tasks.forEach((task) => {
                    if (!task.id) {
                        task.id = String(Date.now());
                    }
                });

                this.listeners.forEach(listener => {
                    listener(getCopyOfTasks(this.tasks));
                });
            } else {
                console.error('DataSource: Data is not correct.');
            }
        }

        /**
         * Task format adaptation
         * @param {object} task - <title, description, status,id>*/
        function addTask(task) {
            if (task && typeof task === 'object') {
                const taskCopy = JSON.parse(JSON.stringify(task));
                const newData = [...this.tasks];
                newData.push(taskCopy);
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
        /**
         * Getting a task from the initial tasks array by task id
         * @param {string} taskId
         * */
        function getDataElemById(taskId) {
            return this.tasks.find((item) => item.id ===taskId)
        }

        /**
         * Updating a task by its id
         * @param {Object} newData
         * @param {string} idTask
         */
        function updateDataElemById(newData,idTask) {
            let taskFromDS = dataSource.getDataElemById(idTask);
            let indexTask = this.tasks.findIndex((item)=> item ===taskFromDS);

            this.tasks[indexTask] = {...newData};
            this.update(this.tasks);
        }


        /*PRIVATE METHODS */
        /**
         * Setting data to initial elem
         * @param  {Array} dataArray - <{title, description, status: open | in-progress | complete | decline",id}>
         */
        function getCopyOfTasks(dataArray) {
            if (Array.isArray(dataArray) && dataArray.length !== 0) {
                let deepCopy = JSON.parse(JSON.stringify(dataArray));
                return deepCopy;
            } else {
                console.error('DataSource: array is empty');
            }
        }

        /* init */
        this.data = [];
        this.tasks = [];
        this.listeners = [];


        /* PUBLIC METHODS */
        this.subscribe = subscribe.bind(this);
        this.update = update.bind(this);
        this.addTask = addTask.bind(this);
        this.getDataElemById = getDataElemById.bind(this);
        this.updateDataElemById = updateDataElemById.bind(this);
        this.deleteTask = deleteTask.bind(this);
    }


    /* export */
    window.DataSource = new DataSource();
})()
