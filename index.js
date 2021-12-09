//import
const listComponent = window.ListComponent;
const DataSourse = window.DataSourse;
const TaskComponent = window.TaskComponent;
const FormComponent = window.FormComponent;

let body = document.querySelector('body');
let root = document.getElementById('root');
body.appendChild(root);

let data1 = ['header1','success','comment1'];
let data2 = ['header2','in-progress','comment2'];
let data3 = {header: 'header3', status: 'failed',description:'Comment3'}

DataSourse.subscribe(listComponent.update);
DataSourse.update(data1);
DataSourse.update(data2);
DataSourse.update(data3);
FormComponent.mount(root);
listComponent.mount(root);
