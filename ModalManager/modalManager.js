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
        elem.className = 'todo-modals__active';

        const modalsBox = document.createElement('div');
        modalsBox.id = 'modals';

        const editModal  = new EditModalTask(send); //instance of EditModal
        let taskId = null;


        /* PUBLIC METHODS */
        /**
         * @param {string} typeModalComp  - to look values in cases of .getModule()
         * @param {string} idTask
         * */
        function open(typeModalComp, idTask) {
            if (typeof idTask === 'string' && typeof typeModalComp === 'string') {
                taskId = idTask;
                let elemTaskViewComponent = dataSource.getDataElemById(idTask);
                body.insertBefore(modalsBox,body.children[1]);
                 modalsBox.appendChild(elem);
                getModal(typeModalComp, elemTaskViewComponent);
            } else {
                console.error('ModalManager: id is not correct');
            }

            function getModal(typeModalComp, elemOfTask) {
                switch (typeModalComp) {
                    case 'edit':
                        editModal.setValuesForFields(elemOfTask);
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
         * @param {HTMLElement} taskNameNode - elem of edit modal
         * @param {HTMLElement} taskDescNode - elem of edit modal
         */
        function send(taskNameNode,taskDescNode) {
            const task = dataSource.getDataElemById(taskId);
            const copyTaskFromDS = JSON.parse(JSON.stringify(task));
            const newData = {};

            for (let prop in copyTaskFromDS) {
                newData.title = taskNameNode.value;
                newData.description = taskDescNode.value;
                newData[prop] = copyTaskFromDS[prop];
            }
            dataSource.updateDataElemById(newData, taskId);
        }


        /* PUBLISH METHODS */
        this.open = open.bind(this);
    }


    /* export */
    window.ModalManager = new ModalManager();
})()
