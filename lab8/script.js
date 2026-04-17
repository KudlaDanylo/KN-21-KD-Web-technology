let nextId = 1;
const uptadeBtn = document.getElementById('buttonUpdate');
const tableBody = document.getElementById("usersTable");
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            tableBody.innerHTML = "";

            const limitedData = data.slice(0, 10);
            nextId = limitedData.length + 1;

            limitedData.forEach(user => {
                let row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.title}</td>
                    `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Помилка", error));

} 

fetchData();

uptadeBtn.addEventListener("click", fetchData);

const userForm = document.getElementById("userForm");
 userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userTask = document.getElementById("userTask").value;
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${nextId}</td>
    <td>${userTask}</td>
    `;

    tableBody.appendChild(row);
     nextId++;
    userForm.reset();
});