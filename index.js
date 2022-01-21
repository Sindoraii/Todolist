//import
const listComponent = window.ListComponent;
const DataSourse = window.DataSourse;
// const TaskComponent = window.TaskComponent;
const FormComponent = window.FormComponent;

const body = document.querySelector('body');
const root = document.getElementById('root');
body.appendChild(root);

const data1 = { header: 'header1', description:'Comment1'};
const data2 = { header: 'header2',  description:'Comment2'};
const data3 = { header: 'header3',  description:'Comment3'}

FormComponent.mount(root);
DataSourse.subscribe(listComponent.update);
DataSourse.update(data1);
DataSourse.update(data2);
DataSourse.update(data3);
listComponent.mount(root);
