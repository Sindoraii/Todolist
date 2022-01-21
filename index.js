//import
const listComponent = window.ListComponent;
const DataSourse = window.DataSourse;
const FormComponent = window.FormComponent;

// init stub data
const stubData = [
    { title: 'header1', description:'Comment1', status: 'in-progress'},
    { title: 'header2',  description:'Comment2', status: 'failed'},
    { title: 'header3',  description:'Comment3', status: 'success'}
];

// init SPA
const root = document.getElementById('root');
FormComponent.mount(root);
DataSourse.subscribe(listComponent.update);
DataSourse.update(stubData);
listComponent.mount(root);
