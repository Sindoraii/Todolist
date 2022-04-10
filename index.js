/*import */
const listComponent = window.ListComponent;
const dataSource = window.DataSource;
const formComponent = window.FormComponent;
const modalManager = window.ModalManager;


/* init stub data */
const stubData = [
    {title: 'header1', description: 'Comment1', status: 'in-progress', id: '111'},
    {title: 'header2', description: 'Comment2', status: 'open', id: '222'},
    {title: 'header3', description: 'Comment3', status: 'complete'},
    { title: 'header1', description:'Comment1', status: 'in-progress'},
    { title: 'header2',  description:'Comment2', status: 'failed'},
    { title: 'header3',  description:'Comment3', status: 'success'},
    { title: 'header1', description:'Comment1', status: 'in-progress'},
    { title: 'header2',  description:'Comment2', status: 'failed'},
    { title: 'header3',  description:'Comment3', status: 'success'},
    { title: 'header1', description:'Comment1', status: 'in-progress'},
    { title: 'header2',  description:'Comment2', status: 'failed'},
    { title: 'header3',  description:'Comment3', status: 'success'},
    { title: 'header1', description:'Comment1', status: 'in-progress'},
    { title: 'header2',  description:'Comment2', status: 'failed'},
    { title: 'header3',  description:'Comment3', status: 'success'},
    { title: 'header1', description:'Comment1', status: 'in-progress'},
    { title: 'header2',  description:'Comment2', status: 'failed'},
    { title: 'header3',  description:'Comment3', status: 'success'},
    { title: 'header1', description:'Comment1', status: 'in-progress'},
    { title: 'header2',  description:'Comment2', status: 'failed'},
    { title: 'header3',  description:'Comment3', status: 'success'},
    { title: 'header1', description:'Comment1', status: 'in-progress'},
    { title: 'header2',  description:'Comment2', status: 'failed'},
    { title: 'header3',  description:'Comment3', status: 'success'},

];


/* init SPA */
const root = document.getElementById('root');
const body = document.getElementsByTagName('body')[0];
formComponent.mount(root);
dataSource.subscribe(listComponent.update);
dataSource.update(stubData);
listComponent.mount(root);
modalManager.mount(body);
