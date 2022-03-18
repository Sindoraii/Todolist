(function () {

    function EditModalTask(callback) {
        //init
        const elem = document.createElement('div');
        elem.className = 'todo-editModal';

        let parentElem = null;

        //close button
        const closeButton = document.createElement('button');
        closeButton.className = 'todo-editModal_button todo-editModal_button-close';

        //confirmation button
        const confirmButton = document.createElement('button');
        confirmButton.className = 'todo-editModal_button-confirm';
        confirmButton.innerText = 'OK';

        //header
        const headerOfModal = document.createElement('header');
        headerOfModal.innerText = 'Task editing';
        headerOfModal.className = 'todo-editModal_header';

        //section for inputs
        const taskData = document.createElement('section');
        taskData.className = 'task-data';


        // inputs
        const taskName = document.createElement('input');
        taskName.className = 'task-data__input';
        taskName.id = 'data-task-name';

        const taskDesc = document.createElement('textarea');
        taskDesc.className = 'task-data__textarea';
        taskDesc.placeholder = 'Add comment...';
        taskDesc.id = 'data-task-desc';

        //labels
        const taskNameLabel = document.createElement('label');
        taskNameLabel.innerText = 'Task name:';
        taskNameLabel.setAttribute('for',taskName.id);
        taskNameLabel.className = 'task-data__label';

        const taskDescLabel = document.createElement('label');
        taskDescLabel.innerText = 'Description:';
        taskDescLabel.setAttribute('for',taskDesc.id);
        taskDescLabel.className = 'task-data__label';

        //wrapper
        const wrapperRow_1 = document.createElement('div');
        wrapperRow_1.className = 'task-data__wrap-row';

        const wrapperRow_2  = document.createElement('div');
        wrapperRow_2.className = 'task-data__wrap-row';


        //events
        closeButton.addEventListener('click', (event) => {
            elem.remove();
        });

        document.addEventListener('click',(event)=>{
            if(elem && !event.target.closest('.todo-editModal') ) {
                elem.remove();
            }
        })

        confirmButton.onclick = callback(taskName,taskDesc);

        this.mount  = (parent) => {
                if(parent && parent instanceof HTMLElement){
                    parentElem = parent;
                    parentElem.appendChild(elem);

                } else {
                    console.error('EditModal: This parent is`t correct');
                }
            }
        this.set = (taskData) => {
                if(typeof taskData === 'object') {
                    const taskDataForEditing = JSON.parse(JSON.stringify(taskData));
                    taskName.value = taskDataForEditing.title;
                    taskDesc.value = taskDataForEditing.description;
                } else {
                    console.error('EditModal: Type of task is not correct');
                }
            }

        elem.appendChild(headerOfModal);
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
    //export
    window.EditModalTask =  EditModalTask;
})()
