/*
Filename: ComplexProgram.js
Description: This is a complex and elaborate JavaScript program that demonstrates various advanced programming concepts including object-oriented programming, async/await, DOM manipulation, event handling, and API integration.
*/

// Declare a class for managing a list of users
class UserList {
  constructor() {
    this.users = [];
  }

  // Async function to fetch users from a remote API
  async fetchUsers() {
    try {
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      this.users = data;
      console.log(`Fetched ${data.length} users.`);
    } catch (error) {
      console.error('Unable to fetch users:', error);
    }
  }

  // Method to display users in a table on the web page
  displayUsers() {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    this.users.forEach(user => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const emailCell = document.createElement('td');

      nameCell.textContent = user.name;
      emailCell.textContent = user.email;

      row.appendChild(nameCell);
      row.appendChild(emailCell);

      tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
}

// Event listener for button click that initiates fetching and displaying users
document.getElementById('fetchButton').addEventListener('click', async () => {
  const userList = new UserList();
  await userList.fetchUsers();
  userList.displayUsers();
});

// Start the program by triggering the button click event
document.getElementById('fetchButton').click();