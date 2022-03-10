//import
const listComponent = window.ListComponent;
const dataSource = window.DataSource;
const formComponent = window.FormComponent;
// const editModalTask = window.EditModalTask;


// init stub data
const stubData = [
    { title: 'header1', description:'Comment1', status: 'in-progress'},
    { title: 'header2',  description:'Comment2', status: 'failed'},
    { title: 'header3',  description:'Comment3', status: 'success'}
];

// init SPA
const root = document.getElementById('root');
formComponent.mount(root);
dataSource.subscribe(listComponent.update);
dataSource.update(stubData);
listComponent.mount(root);
// editModalTask.mount(root);
