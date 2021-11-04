(function (){
    let ListComponent = {};

    let elem = document.createElement('div');
    elem.className = 'list';

    let tasks = [];







    ListComponent = {
        elem: elem,
        tasks: tasks
    };

    //export
    window.ListComponent = ListComponent;

})()

