(function () {
      function TaskComponent(header,status,description) {
        //parent for elements of task
        let taskNode =  document.createElement('div');
        taskNode.className = 'todo-task';

        let parentElem = null;

        //public methods
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
                taskNode.remove(); //taskNode
            } else {
                console.error('TaskComponent: this elem is not parent');
            }
        }

        //header
        this.taskName = header;
        let taskName = document.createElement('div');
        taskName.innerText = 'New task';
        taskName.className = 'todo-task_header';
        if (this.taskName) {
           taskName.innerText = this.taskName;
        }
       taskNode.appendChild(taskName);

        //wrapper with task content
        const wrapperRow = document.createElement('div');
        wrapperRow.className = 'todo-task_wrapper';
        taskNode.appendChild(wrapperRow);

        //status
        this.taskStatus = status;
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
        wrapperRow.appendChild(taskStatus);

        //description
        this.desc = description;
        let taskDesc = document.createElement('input');
        taskDesc.placeholder = 'Add comment...';
        taskDesc.readOnly = true;
        taskDesc.className = 'todo-task_desc';
        if (this.desc) {
            taskDesc.value = this.desc;
        }
        wrapperRow.appendChild(taskDesc);

        //changing status button
        const taskButton = document.createElement('button');
        taskButton.className = 'todo-task_status todo-task_status_button-change';
        taskButton.innerText = 'change status';
        wrapperRow.appendChild(taskButton);
      }

    //export
    window.TaskComponent = TaskComponent;
})()
