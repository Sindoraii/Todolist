(function (){
    function ListComponent() {

        function update (dataArray) {
            for (let i = 0; i < dataArray.length; i++) {
                dataArray[i].mountTask(listNode);
            }
        }

        function mount(parent) {
            if (listNode.hasChildNodes() === true) {
                if (parent instanceof HTMLElement) {
                    parentElem = parent;
                    parentElem.appendChild(listNode);
                } else {
                    console.error("ListComponent: this parent is not correct type");
                }
            }else {
                console.error('ListComponent: List has not task');
            }
        }

        function unmount (parent) {
            if (parent === parentElem) {
                listNode.remove();
            } else {
                console.error('ListComponent: this elem is not parent');
            }
        }

        const listNode = document.createElement('div');
        listNode.className = "todo-list";

        let parentElem = null;

        this.update = update.bind(this);
        this.mount = mount.bind(this);
        this.unmount = unmount.bind(this);

    }
    //export
    window.ListComponent = new ListComponent();
})()
