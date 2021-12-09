(function(){
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

       /* function readingData() {

        }

        function update(readingData()) {

        }*/

        //structure of component
        const elem = document.createElement('div');
        elem.className = 'todo-form';
        let parentElem = null;
        // inputs
        const taskName = document.createElement('input');
        taskName.type = 'text';
        taskName.className = 'todo-form_input-name';
        taskName.id = taskName.className;



        //publish methods
        this.mount = mount.bind(this);
        this.unmount = unmount.bind(this);
    }
    //export
    window.FormComponent = new FormComponent();
})()
