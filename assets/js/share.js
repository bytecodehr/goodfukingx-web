document.querySelectorAll('.share-button').forEach(button => {
  button.addEventListener('click', () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        const message = document.createElement('div');
        message.textContent = 'URL copied to clipboard!';
        message.classList.add('copy-message');
        button.insertAdjacentElement('afterend', message); // Append message after the button
        setTimeout(() => {
          message.remove();
        }, 3000); // Remove message after 3 seconds
      })
      .catch(err => {
        console.error('Failed to copy URL: ', err);
      });
  });
});