//import
const dataSource = window.DataSource;
const formComponent = window.FormComponent;
const TaskManager = window.TaskManager;

// init stub data
const stubData = [
    { title: 'header1', description:'Comment1', status: 'in-progress', id:111},
    { title: 'header2',  description:'Comment2', status: 'failed', id:222},
    { title: 'header3',  description:'Comment3', status: 'success',id:333}
];

// init SPA
const root = document.getElementById('root');
formComponent.mount(root);
dataSource.update(stubData);
const taskManager = new TaskManager(dataSource,root);
