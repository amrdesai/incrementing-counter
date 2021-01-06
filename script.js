// Variables
const counters = document.querySelectorAll('.counter');

// Display incrementing counter to UI
counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const cnt = +counter.innerText;

        const increment = target / 200;

        if (cnt < target) {
            counter.innerText = `${Math.ceil(cnt + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };

    // Run updateCounter function
    updateCounter();
});
