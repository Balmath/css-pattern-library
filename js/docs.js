(function () {
    var hidden_button = document.querySelector('.hidden__button');
    hidden_button.addEventListener('click', function (event) {
        event.target.previousElementSibling.classList.toggle('hidden');

        if (event.target.textContent == 'Show') {
            event.target.textContent = 'Hide';
        } else {
            event.target.textContent = 'Show';
        }
    });
}());