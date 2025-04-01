// This file contains the main JavaScript code for the website. It handles client-side interactions and may include functions to manipulate the DOM.

document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.id;
            // Logic to handle product selection
            console.log(`Product selected: ${productId}`);
        });
    });

    const pricingButton = document.getElementById('view-pricing');
    if (pricingButton) {
        pricingButton.addEventListener('click', () => {
            window.location.href = '/pricing';
        });
    }
});