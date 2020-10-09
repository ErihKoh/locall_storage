
// console.log(localStorage);
// localStorage.setItem('my-data', JSON.stringify({ name: 'mango', age: 24 }));
// // console.log(localStorage.getItem('my-data'));
// const saveData = localStorage.getItem('my-data');
// const parseData = JSON.parse(saveData);
// console.log(parseData);
// localStorage.removeItem('my-data');


const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};
const STORAGE_KEY = 'feedback-message';

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
refs.form.addEventListener('input', onInputForm);

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('отправляем форму');
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
     localStorage.removeItem('form');
 }



function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);
};


function populateTextarea() { 
    const savedMsg = localStorage.getItem(STORAGE_KEY);
    if (savedMsg) {
        console.log(savedMsg);
    }
    refs.textarea.value = savedMsg;
};


function onInputForm (evt) {
    // console.log(evt.target.name);
    // console.log(evt.target.value);
    formData[evt.target.name] = evt.target.value;
   
    

    localStorage.setItem('form', JSON.stringify(formData));
    const savedForm = localStorage.getItem('form');
    const parseForm = JSON.parse(savedForm);
 console.log(parseForm);
}