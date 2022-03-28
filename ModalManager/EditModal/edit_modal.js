(function () {

    function EditModalTask(callback) {
        /* init */
        const elem = document.createElement('section');
        elem.className = 'todo-editModal';
        let parentElem = null;

        /* close button */
        const closeButton = document.createElement('button');
        closeButton.className = 'todo-editModal_button todo-editModal_button-close';

        /* confirmation button */
        const confirmButton = document.createElement('button');
        confirmButton.className = 'todo-editModal_button-confirm';
        confirmButton.innerText = 'OK';

        /* header */
        const headerOfModal = document.createElement('header');
        const h2OfHeader = document.createElement('h2');
        h2OfHeader.innerText = 'Task editing';
        h2OfHeader.className = 'todo-editModal_header-h2';
        headerOfModal.className = 'todo-editModal_header';

        /* section for inputs */
        const taskData = document.createElement('article');
        taskData.className = 'task-data';

        /* inputs */
        const taskName = document.createElement('input');
        taskName.className = 'task-data__input';
        taskName.id = 'data-task-name';

        const taskDesc = document.createElement('textarea');
        taskDesc.className = 'task-data__textarea';
        taskDesc.placeholder = 'Add comment...';
        taskDesc.id = 'data-task-desc';

        /* labels */
        const taskNameLabel = document.createElement('label');
        taskNameLabel.innerText = 'Task name:';
        taskNameLabel.setAttribute('for',taskName.id);
        taskNameLabel.className = 'task-data__label';

        const taskDescLabel = document.createElement('label');
        taskDescLabel.innerText = 'Description:';
        taskDescLabel.setAttribute('for',taskDesc.id);
        taskDescLabel.className = 'task-data__label';

        /* wrapper */
        const wrapperRow_1 = document.createElement('div');
        wrapperRow_1.className = 'task-data__wrap-row';
        const wrapperRow_2  = document.createElement('div');
        wrapperRow_2.className = 'task-data__wrap-row';

        /* events */
        closeButton.onclick = closeEditModal;

        document.addEventListener('click',(event)=>{
            if(elem && !event.target.closest('.todo-editModal') ) {
                closeEditModal();
            }
        })

        confirmButton.onclick = () => { onclickHandler(taskName, taskDesc)}


        /* PRIVATE METHODS */
        /**
         * Handler for onclick-events
         * @param {HTMLElement} title - input 'Task name'
         * @param {HTMLElement} description -  textarea 'Description'
         * */
        function onclickHandler(title,description) {
            stopEditing();
            callback(title,description);
            closeEditModal();

            function stopEditing() {
                title.setAttribute('disabled',true);
                description.setAttribute('disabled',true);
            }
        }

        function closeEditModal() {
            elem.remove();
        }


        /* PUBLIC METHODS */
        this.mount  = (parent) => {
                if(parent && parent instanceof HTMLElement){
                    parentElem = parent;
                    parentElem.appendChild(elem);

                } else {
                    console.error('EditModal: This parent is`t correct');
                }
            }

        this.setValuesForFields = (taskData) => {
                if(typeof taskData === 'object') {
                    const taskDataForEditing = JSON.parse(JSON.stringify(taskData));
                    taskName.value = taskDataForEditing.title;
                    taskDesc.value = taskDataForEditing.description;
                } else {
                    console.error('EditModal: Type of task is not correct');
                }
            }


        elem.appendChild(headerOfModal);
        headerOfModal.appendChild(h2OfHeader);
        headerOfModal.appendChild(closeButton);
        elem.appendChild(confirmButton);
        elem.appendChild(taskData);
        taskData.appendChild(wrapperRow_1);
        wrapperRow_1.appendChild(taskNameLabel);
        wrapperRow_1.appendChild(taskName);
        taskData.appendChild(wrapperRow_2);
        wrapperRow_2.appendChild(taskDescLabel);
        wrapperRow_2.appendChild(taskDesc);
    }

    /* export */
    window.EditModalTask =  EditModalTask;
})()
