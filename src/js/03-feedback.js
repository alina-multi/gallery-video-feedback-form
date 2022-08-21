import throttle from "lodash.throttle"

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener ("input", throttle(onFormIput, 1000))
form.addEventListener("submit", onFormSubmit)

updateForm();

function onFormIput(ev) { 
    let formData = localStorage.getItem(STORAGE_KEY);
    formData = formData ? JSON.parse(formData) : {}
    formData[ev.target.name] = ev.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))  

}

function onFormSubmit(ev) {
    ev.preventDefault()
     form.forEach((name, value) => {
        console.log(name, value);
    })  
    ev.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
   
}

function updateForm() {

    let formData = localStorage.getItem(STORAGE_KEY);
    if (formData) {
        formData = JSON.parse(formData) 
        Object.entries(formData).forEach((name) => {
            form.elements[name[0]].value = name[1];
        })
    }
}
                       


    
