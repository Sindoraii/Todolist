(function () {

    function EditModalTask() {
        //init
        const elem = document.createElement('div');
        elem.className = 'todo-editModal';
        console.dir(elem);

        let parentElem = null;

        //close button
        const closeButton = document.createElement('button');
        closeButton.className = 'todo-editModal_button todo-editModal_button-close';

        //confirmation button
        const confirmButton = document.createElement('button');
        confirmButton.className = 'todo-editModal_button-confirm';
        confirmButton.innerText = 'Save';

        //header
        const headerOfModal = document.createElement('header');
        headerOfModal.innerText = 'Task editing';
        headerOfModal.className = 'todo-editModal_header';

        //events
        closeButton.addEventListener('click', (event) => {
            elem.remove();
        });

        document.addEventListener('click',(event)=>{
            if(elem && !event.target.closest('.todo-editModal') ) {
                elem.remove();
            }
        })

        //public methods
         function mount (parent) {
            if(parent && parent instanceof HTMLElement){
                parentElem = parent;
                parentElem.appendChild(elem);

            } else {
                console.error('EditModal: This parent is`t correct');
            }
        }
        //publish methods
        this.mount = mount.bind(this);

        elem.appendChild(headerOfModal);
        headerOfModal.appendChild(closeButton);
        elem.appendChild(confirmButton);
    }
    //export
    window.EditModalTask = new EditModalTask();
})()