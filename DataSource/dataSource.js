(function () {
    function DataSource() {
        let savedData = null;

        //public methods
        function subscribe(listener) {
            this.listeners.push(listener);
        }
        /**
         * @param data  {Array} <{title, description, status: open | inProgress | complete | decline", id}>
         *     */
        function update(data) {
            if (data && Array.isArray(data)) {
                this.data = data;

                //give ID to task

                this.data.forEach((obj) => {
                    if (!obj.id) {
                        obj.id = String(Date.now());
                    }
                });
                saveData(this.data);

                this.listeners.forEach(listener => {
                    listener(this.data);
                });
            } else {
                console.error('DataSource: Data is not correct.');
            }
        }
        /**
         * @param task {object} <title, description, status,id>*/
        function addTask(task) {
            if (task && typeof task === 'object') {
                const newData = [...this.data];
                newData.push(task);
                this.update(newData);
            } else {
                console.error('DataSource: Data is not correct.');
            }
        }
        /**
         * @param id {string}
         * */
        function getDataElemById(id) {
            let elemById = null;
            if (savedData !== null) {
                savedData.forEach((elem) => {
                    if (elem.id === id) {
                        elemById = elem;
                    }
                })
            } else {
                console.error('DataSource: data did not save');
            }
            return elemById;
        }

        /***
         *
         * @param newData {Object}
         * @param idTask {string}
         */
        function updateDataElemById(newData,idTask) {
            let elem = dataSource.getDataElemById(idTask);
            for(let prop in elem) {
                elem[prop] = newData[prop];
            }
            this.update(savedData);

        }

        /**
         * @param dataArray  {Array} <{title, description, status: open | in-progress | complete | decline",id}>
         *     */
        //private method //TODO !SRP
        function saveData(dataArray) {
            if (Array.isArray(dataArray) && dataArray.length !== 0) {
                savedData = dataArray;
                return savedData;
            } else {
                console.error('DataSource: array is empty');
            }
        }

        this.data = [];
        this.listeners = [];
        this.subscribe = subscribe.bind(this);
        this.update = update.bind(this);
        this.addTask = addTask.bind(this);
        this.getDataElemById = getDataElemById.bind(this);
        this.updateDataElemById = updateDataElemById.bind(this);
    }

    //export
    window.DataSource = new DataSource();
})()
