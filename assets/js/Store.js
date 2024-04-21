document.addEventListener('DOMContentLoaded', function() {
    const stores = [
        { name: "Nakshatra", address: "123 Main St", state: "California" },
        { name: "Subhani", address: "456 Elm St", state: "Texas" },
        { name: "Nagarjuna Grand", address: "789 Oak St", state: "Florida" }
    ];

    const searchBar = document.getElementById('searchBar');
    const tableBody = document.querySelector('#storeTable tbody');

    function updateTable(filteredStores) {
        const rows = filteredStores.map(store => 
            `<tr>
                <td>${store.name}</td>
                <td>${store.address}</td>
                <td>${store.state}</td>
            </tr>`
        ).join('');
        tableBody.innerHTML = rows;
    }

    searchBar.addEventListener('input', (e) => {
        const text = e.target.value.toLowerCase();
        const filteredStores = stores.filter(store => store.name.toLowerCase().includes(text));
        updateTable(filteredStores);
    });

    updateTable(stores); // Initialize the table
});

