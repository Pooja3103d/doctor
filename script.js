document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackDisplay = document.getElementById('feedback-display');

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const feedback = document.getElementById('feedback').value;

        if (name && feedback) {
            const feedbackItem = document.createElement('div');
            feedbackItem.classList.add('feedback-item');
            feedbackItem.innerHTML = `<strong>${name}:</strong> <p>${feedback}</p>`;
            feedbackDisplay.appendChild(feedbackItem);

            // Clear the form fields
            document.getElementById('name').value = '';
            document.getElementById('feedback').value = '';
        }
    });
});
