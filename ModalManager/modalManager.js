(function () {
    //import
    const editModal = window.EditModalTask;
    const dataSource = window.DataSource;

    function ModalManager() {
        const elem = document.createElement('div');
        elem.className = 'todo-modals';

        //public methods
        /**
         * @param nameModalComp {string}<to look values in cases of .getModule() >
         * @param idTask {string}
         * */
        function open(nameModalComp, idTask) {
            if (typeof idTask === 'string' && typeof nameModalComp === 'string') {
                const elemTaskViewComponent = dataSource.getDataElemById(idTask);
                root.appendChild(elem);
                getModule(nameModalComp, elemTaskViewComponent);
            } else {
                console.error('ModalManager: id is not correct');
            }
        }

        //private methods
        /**
         * @param nameModalComp  {string}
         * @param elemOfTask {Object} <{title,description,status,id}>
         * */
        //preparation of modals for mounting

        function getModule(nameModalComp, elemOfTask) {
            switch (nameModalComp) {
                case 'edit':
                    editModal.set(elemOfTask);
                    editModal.mount(elem);
                    break;

                default:
                    console.error('ModalManager: module name is not correct ');
            }
        }

        //publish methods
        this.open = open.bind(this);
    }

    //export
    window.ModalManager = new ModalManager();
})()
