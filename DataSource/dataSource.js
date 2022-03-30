(function () {
    function DataSource() {
        /* PUBLIC METHODS */
        function subscribe(listener) {
            this.listeners.push(listener);
        }

        /**
         * Updating listeners
         * @param {Array} tasks -  <{title, description, status: open | inProgress | complete | decline", id}>>
         **/
        function update(tasks) {
            if (tasks && Array.isArray(tasks)) {
                this.tasks = tasks;

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

        /**
         * Getting a task from the initial elem by its id
         * @param {string} id
         * */
        function getDataElemById(id) {
            let elemById = null;
            if (getCopyOfTasks(this.tasks).length !== 0) {
                getCopyOfTasks(this.tasks).forEach((elem) => {
                    if (elem.id === id) {
                        elemById = elem;
                    }
                })
            } else {
                console.error('DataSource: data did not save');
            }
            return elemById;
        }

        /**
         * Updating a task by its id
         * @param {Object} newData
         * @param {string} idTask
         */
        function updateDataElemById(newData,idTask) {
            let newTasksForUpdating = [];
            let dataCopy = JSON.parse(JSON.stringify(newData));
            let elem = JSON.parse(JSON.stringify(dataSource.getDataElemById(idTask)));

            for(let prop in elem) {
                elem[prop] = dataCopy[prop];
            }
             this.tasks.forEach((item) => {
                if(item.id === elem.id){
                    item = elem;
                }
                 newTasksForUpdating.push(item);
             })

            this.update(getCopyOfTasks(newTasksForUpdating));
        }


        /*PRIVATE METHOD */
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
        this.tasks = [];
        this.listeners = [];


        /* PUBLISH METHODS */
        this.subscribe = subscribe.bind(this);
        this.update = update.bind(this);
        this.addTask = addTask.bind(this);
        this.getDataElemById = getDataElemById.bind(this);
        this.updateDataElemById = updateDataElemById.bind(this);
    }


    /* export */
    window.DataSource = new DataSource();
})()
