(function () {
    //import
    const EditModalTask = window.EditModalTask;
    const dataSource = window.DataSource;

    function ModalManager() {
        const elem = document.createElement('div');
        elem.className = 'todo-modals';
        //instance of EditModal
        const editModal  = new EditModalTask(send);

    let id = null
        //public methods
        /**
         * @param typeModalComp {string}<to look values in cases of .getModule() >
         * @param idTask {string}
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

        //private methods
        /***
         *
         * @param taskName {string} - field of EditModal
         * @param taskDesc {string} - field of EditModal
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

        //publish methods
        this.open = open.bind(this);
    }
    //export
    window.ModalManager = new ModalManager();
})()
