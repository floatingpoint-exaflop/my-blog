const inputUsername = document.querySelector('#inputUsername');
const inputTitle = document.querySelector('#inputTitle');
const inputContent = document.querySelector('#inputContent');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (inputUsername.value !== '' && inputTitle.value !== '' && inputContent.value !== '') {
        let submissionsArray = JSON.parse(localStorage.getItem('submissions')) || [];
        const newSubmission = {
            userName: inputUsername.value.trim(),
            postTitle: inputTitle.value.trim(),
            postContent: inputContent.value.trim(),
        };
        console.log(newSubmission);
        submissionsArray.push(newSubmission);
        localStorage.setItem('submissions', JSON.stringify(submissionsArray));
        window.location.replace("./blog.html");
    } else {
        alert(`Please complete all fields on the blog form.`);
    }
});