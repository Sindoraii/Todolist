(function () {
    /* import */
    const modalManager = window.ModalManager;

    /**
     * Creating task instances
     * @param {string} header - task title
     * @param {string} description
     * @param {string} status - < {open| in-progress | complete| decline}> 'open' is by default
     * @param {string} id - task id
     */
    function TaskViewComponent(header, description, status, id) {
        /* PRIVATE  METHODS */
        function createInputRadio(name, value, parent) {
            if (parent instanceof HTMLElement && typeof value === 'string') {
                /* input */
                let radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = name;
                radio.id = value;
                /* label */
                let label = document.createElement('label');
                label.setAttribute('for', radio.id);
                label.innerText = value;
                /* wrapper */
                const wrapper = document.createElement('div');
                wrapper.className = 'todo-task_wrapper';
                wrapper.appendChild(radio);
                wrapper.appendChild(label);
                parent.appendChild(wrapper);
            } else {
                console.error("TaskComponent: arguments is not correct type");
            }
        }

        function createChangingStatusForm(parent) {
            let form = document.createElement('div');
            form.className = 'todo-task_check-status-form';

            createInputRadio('status', 'open', form);
            createInputRadio('status', 'in-progress', form);
            createInputRadio('status', 'complete', form);
            createInputRadio('status', 'decline', form);
            parent.appendChild(form);
        }


        /* PUBLIC METHODS */
        this.mountTask = function (parent) {
            if (parent instanceof HTMLElement) {
                parentElem = parent;
                parentElem.appendChild(taskNode);
            } else {
                console.error("TaskComponent: this parent is not correct type");
            }
        }


        this.unmountTask = function (parent) {
            if (parent === parentElem) {
                taskNode.remove();
            } else {
                console.error('TaskComponent: this elem is not parent');
            }
        }


        /* header */
        this.taskName = header;
        let taskNameHeader = document.createElement('header');
        taskNameHeader.className = 'todo-task_header';
        let taskName = document.createElement('h3');
        taskName.innerText = 'New task';
        taskName.className = 'todo-task_header-h3';
        if (this.taskName) {
            taskName.innerText = this.taskName;
        }

        /* edit icon */
        let editButton = document.createElement('button');
        editButton.className = 'todo-task-header_button-edit';

        /* wrapper with task content */
        const wrapperRow = document.createElement('div');
        wrapperRow.className = 'todo-task_wrapper';

        /* status */
        /*let status;
        let taskStatus = document.createElement('div');

        switch (this.taskStatus) {
            case "in-progress":
               taskStatus.className = 'todo-task_status' + ' ' + 'todo-task_status_in-progress';
                break;
            case "failed":
                taskStatus.className = 'todo-task_status' + ' ' + 'todo-task_status_failed';
                break;
            case 'success':
                taskStatus.className = 'todo-task_status' + ' ' + 'todo-task_status_success';
                break;
            default:
                this.taskStatus = "default";
                taskStatus.className = 'todo-task_status';
                console.error("Status is not true. Choose 'success','failed' or 'in-progress'.");
                break;
        }
        //wrapperRow.appendChild(taskStatus);*/

        /* description */
        this.desc = description;
        let taskDesc = document.createElement('input');
        taskDesc.placeholder = 'Add comment...';
        taskDesc.readOnly = true;
        taskDesc.className = 'todo-task_desc';
        if (this.desc) {
            taskDesc.value = this.desc;
        }


        /* changing status button */
        const taskButton = document.createElement('button');
        taskButton.className = 'todo-task_status todo-task_status_button-change';
        taskButton.innerText = 'change status';
        /* events */
        taskButton.addEventListener('click', (event) => {
            let elem = event.target.parentNode.querySelector('.todo-task_check-status-form');
            if (!event.target.parentNode.contains(elem)) {
                createChangingStatusForm(event.target.parentNode);
            }
        })

        editButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const parent = event.target.closest('.todo-task');
            modalManager.open('edit', parent.id);

        })

        /* init task */
        let taskNode = document.createElement('article');
        taskNode.className = 'todo-task';
        taskNode.id = id;

        let parentElem = null;

        taskNode.appendChild(taskNameHeader);
        taskNameHeader.appendChild(taskName);
        taskNameHeader.appendChild(editButton);
        taskNode.appendChild(wrapperRow);
        wrapperRow.appendChild(taskDesc);
        wrapperRow.appendChild(taskButton);
    }


    /* export */
    window.TaskViewComponent = TaskViewComponent;
})()
