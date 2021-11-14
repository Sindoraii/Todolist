(function () {
    function TaskComponent() {
        let task = {};

        const taskNode = document.createElement('div');
        taskNode.className = 'todo-task';

        let parentElem = null;

        //public methods
        this.mount = function (parent) {
            if (parent instanceof HTMLElement) {
                parentElem = parent;
                parentElem.appendChild(taskNode);
            } else {
                console.error("TaskComponent: this parent is not correct type");
            }
        }

        this.unmount = function (parent) {
            if (parent === parentElem) {
                taskNode.remove();
            } else {
                console.error('TaskComponent: this elem is not parent');
            }
        }

        this.createTask = function (header, status, description) {
            //header
            let taskName = document.createElement('div');
            taskName.innerText = 'New task';
            taskName.className = 'todo-task_header';
            if (header) {
                taskName.innerText = header;
            }
            taskNode.appendChild(taskName);

            //wrapper with task content
            const wrapperRow = document.createElement('div');
            wrapperRow.className = 'todo-task_wrapper';
            taskNode.appendChild(wrapperRow);

            //status
            let taskStatus = document.createElement('div');

            switch (status) {
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
                    status = "default";
                    taskStatus.className = 'todo-task_status';
                    console.error("Status is not true. Chose 'success','failed' or 'in-progress'.");
                    break;
            }
            wrapperRow.appendChild(taskStatus);

            //description
            let taskDesc = document.createElement('input');
            taskDesc.placeholder = 'Add comment...';
            taskDesc.readOnly = true;
            taskDesc.className = 'todo-task_desc';
            if (description) {
                taskDesc.value = description;
            }
            wrapperRow.appendChild(taskDesc);

            //changing status button
            const taskButton = document.createElement('button');
            taskButton.className = 'todo-task_status todo-task_status_button-change';
            taskButton.innerText = 'change status';
            wrapperRow.appendChild(taskButton);

            return task = {
                taskNode: taskNode,
                header: header,
                status: status,
                description: description
            }
        }
    }
    //export
    window.TaskComponent = new TaskComponent();
})()
