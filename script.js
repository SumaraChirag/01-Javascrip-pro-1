// Function to add a new item to the list
function addItem() {
    const inputField = document.getElementById('itemInput');
    const itemText = inputField.value.trim();

    if (itemText !== '') {
        const itemList = document.getElementById('itemList');

        const li = document.createElement('li');
        li.textContent = itemText;

        itemList.appendChild(li);

        // Clear input field after adding item
        inputField.value = '';
    } else {
        alert('Please enter a valid item!');
    }
}
