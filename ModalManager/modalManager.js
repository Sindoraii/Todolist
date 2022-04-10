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
        let parentElem = null;


        /* PUBLIC METHODS */
        /**
         * @param {string} typeModalComp  - to look values in cases of .getModule()
         * @param {string} idTask
         * */
        function open(typeModalComp, idTask) {
            if (typeof idTask === 'string' && typeof typeModalComp === 'string') {
                taskId = idTask;
                let elemTaskViewComponent = dataSource.getDataElemById(idTask);
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

        function mount(parent) {
            if (parent instanceof HTMLElement) {
                parentElem = parent;
                parentElem.appendChild(modalsBox);
            }else {
                console.error("ModalManager: this parent is not correct type");
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
            const newData = {...task};
            newData.title = taskNameNode.value;
            newData.description = taskDescNode.value;

            dataSource.updateDataElemById(newData, taskId);
        }


        this.open = open.bind(this);
        this.mount = mount.bind(this);
    }


    /* export */
    window.ModalManager = new ModalManager();
})()
