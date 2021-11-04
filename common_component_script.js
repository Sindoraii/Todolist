(function () {
    let CommonComponent = {};

    let elem = document.createElement('div');
        elem.className = 'CommonComponent';


    function mount(parent) {
        if(parent && parent instanceof HTMLElement ) {
            parent.appendChild(this.elem);
        }
        else {
            console.error(`"CommonComponent: incorrect type"`);
        }
    }

    function unmount(elem) {
        if(this.elem instanceof HTMLElement ){
            this.elem.remove();
        }
        else {
            console.error(`"CommonComponent: incorrect type"`);
        }
    }
  /*  function update(array,newData) {
        if(typeof newData  ==='string') {
            array.push(newData);
        }
    }*/

    //bind context
    CommonComponent.mount = mount.bind(CommonComponent);
    CommonComponent.unmount = unmount.bind(CommonComponent);
    //CommonComponent.update = update.bind(CommonComponent);

    //export
    window.CommonComponent = CommonComponent;
    /* сначала без общего компонента*/
})()