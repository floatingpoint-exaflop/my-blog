//We must declare the variables that link us up to the user's submissions on the html form.
const inputUsername = document.querySelector('#inputUsername');
const inputTitle = document.querySelector('#inputTitle');
const inputContent = document.querySelector('#inputContent');

const submitButton = document.querySelector('#submitButton');

//Then, we must put an event listener on the submit button, so it actually does things.
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    //We want to ensure ALL THREE input text fields have data in them. We don't care how much; they just need something.
    if (inputUsername.value !== '' && inputTitle.value !== '' && inputContent.value !== '') {
        //Declaring and defining an array to hold our list of objects (user submissions), tie it directly to localStorage retrieval.
        let submissionsArray = JSON.parse(localStorage.getItem('submissions')) || [];
        //Declaring and defining the structure for the objects (user submissions).
        const newSubmission = {
            userName: inputUsername.value.trim(),
            postTitle: inputTitle.value.trim(),
            postContent: inputContent.value.trim(),
        };
        console.log(newSubmission);
        //Updating the array and adding an object from the latest submission.
        submissionsArray.push(newSubmission);
        //Updating localStorage with the latest updates to the object array.
        localStorage.setItem('submissions', JSON.stringify(submissionsArray));
        //Leaving the index.html page for the blog.html page, where posts can be viewed.
        window.location.replace("./blog.html");
    } else {
        //If ANY of the three text fields are empty:
            //a. We don't add anything to the array
            //b. We don't go to the blog page
            //c. All we do is receive an alert telling us we need to fill the whole form out.
        alert(`Please complete all fields on the blog form.`);
    }
});