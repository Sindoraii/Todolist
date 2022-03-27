(function () {
    /* import */
    const EditModalTask = window.EditModalTask;
    const dataSource = window.DataSource;

    /**
     * Creating common box for managing modals.
     */
    function ModalManager() {
        /* init */
        const elem = document.createElement('section');
        elem.className = 'todo-modals';
        const editModal  = new EditModalTask(send); //instance of EditModal
        let id = null;


        /* PUBLIC METHODS */
        /**
         * @param {string} typeModalComp  - to look values in cases of .getModule()
         * @param {string} idTask
         * */
        function open(typeModalComp, idTask) {
            if (typeof idTask === 'string' && typeof typeModalComp === 'string') {
                id = idTask;
                 let elemTaskViewComponent = dataSource.getDataElemById(idTask);
                root.appendChild(elem);
                getModal(typeModalComp, elemTaskViewComponent);
            } else {
                console.error('ModalManager: id is not correct');
            }

            function getModal(typeModalComp, elemOfTask) {
                switch (typeModalComp) {
                    case 'edit':
                        editModal.set(elemOfTask);
                        editModal.mount(elem);
                        break;
                    default:
                        console.error('ModalManager: module name is not correct ');
                }
            }
        }

        /* PRIVATE METHODS */
        /***
         * Updating task data in List
         * @param {string} taskName - field of EditModal
         * @param {string} taskDesc - field of EditModal
         */
        function send(taskName,taskDesc) {
            return function () {
                const task = dataSource.getDataElemById(id);
                const copyTask = JSON.parse(JSON.stringify(task));
                const newData = {};

                for(let prop in copyTask) {
                    newData.title = taskName.value;
                    newData.description = taskDesc.value;
                    newData[prop] = copyTask[prop];
                }
                dataSource.updateDataElemById(newData,id)
            }
        }


        /* PUBLISH METHODS */
        this.open = open.bind(this);
    }


    /* export */
    window.ModalManager = new ModalManager();
})()
