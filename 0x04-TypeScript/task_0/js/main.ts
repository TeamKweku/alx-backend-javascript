interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Clark',
  age: 32,
  location: 'Kumasi',
};

const student2: Student = {
  firstName: 'Paa',
  lastName: 'Kwesi',
  age: 25,
  location: 'Accra',
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  //Creating a new table
  const table = document.createElement('table');

  //Create table header
  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  const locationHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  locationHeader.textContent = 'Location';
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);

  // Loop through the student list and add to rows
  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
  });

  document.body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', renderTable);
