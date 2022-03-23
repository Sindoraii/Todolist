(function(){
    // import
    const dataSourceAdapter = window.DataSourceAdapter;

    function FormComponent() {
        //public methods
        function mount(parent) {
            if(parent && parent instanceof HTMLElement) {
                parentElem = parent
                parentElem.appendChild(elem);
            } else {
                console.error('FormComponent: type of parent is not correct');
            }
        }

        function unmount(parent) {
            if(parent === parentElem) {
                elem.remove();
            }else {
                console.error('FormComponent: parent is not true');
            }
        }

        function onSubmit(event) {
            event.preventDefault();
            const taskName = event.target.taskName.value;
            const taskDesc = event.target.description.value;
            adapter.adaptTask(taskName, taskDesc);
        }

        //structure of component
        const elem = document.createElement('form');
        elem.className = 'todo-form';
        let parentElem = null;

        // elements of component
        const formHead = document.createElement('h2');
        formHead.className = 'todo-form_header-h2';
        formHead.innerText = 'Task form';

        const taskName = document.createElement('input');
        taskName.type = 'text';
        taskName.className = 'todo-form_input';
        taskName.id = 'taskName';
        taskName.name = 'taskName';

        const labelForTaskName = document.createElement('label');
        labelForTaskName.innerText = 'Task name:';
        labelForTaskName.setAttribute('for','taskName');
        labelForTaskName.className = 'todo-form_label';


        const taskDescription = document.createElement('textarea');
        taskDescription.placeholder = 'Add comment...';
        taskDescription.className = 'todo-form_description';
        taskDescription.id = 'description';
        taskDescription.name = 'description';

        const descLabel = document.createElement('label');
        descLabel.innerText = 'Description:';
        descLabel.setAttribute('for',taskDescription.id);
        descLabel.className = 'todo-form_label';

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.innerText = 'Submit';

        elem.appendChild(formHead);
        elem.appendChild(labelForTaskName);
        elem.appendChild(taskName);
        elem.appendChild(descLabel);
        elem.appendChild(taskDescription);
        elem.appendChild(submitButton);

        elem.addEventListener('submit',onSubmit);

        // init private fields
        const adapter = dataSourceAdapter;

        // publish methods
        this.mount = mount.bind(this);
        this.unmount = unmount.bind(this);
    }
    // export
    window.FormComponent = new FormComponent();
})()
