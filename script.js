document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[name="chocolate"]');
    const selectedChocolatesList = document.getElementById('selected-chocolates');
    const totalPriceElement = document.getElementById('total-price');

    let selectedChocolates = [];

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const chocolateName = this.value;
            if (this.checked) {
                if (selectedChocolates.length < 8) {
                    selectedChocolates.push(chocolateName);
                } else {
                    this.checked = false;
                    alert("You can select up to 8 chocolates.");
                    return;
                }
            } else {
                selectedChocolates = selectedChocolates.filter(choco => choco !== chocolateName);
            }

            updateSelectedChocolatesList();
            updateTotalPrice();
        });
    });

    function updateSelectedChocolatesList() {
        selectedChocolatesList.innerHTML = '';
        selectedChocolates.forEach(choco => {
            const listItem = document.createElement('li');
            listItem.textContent = choco;
            selectedChocolatesList.appendChild(listItem);
        });
    }

    function updateTotalPrice() {
        const pricePerChocolate = 2.00; // Adjust prices accordingly
        const totalPrice = selectedChocolates.length * pricePerChocolate;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});
