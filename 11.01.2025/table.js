//task2

const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.margin = '20px 0px';

for (let i = 0; i < 8; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 8; j++) {
    const cell = document.createElement('td');
    cell.style.width = '50px';
    cell.style.height = '50px';
    cell.style.backgroundColor = (i + j) % 2 === 0 ? 'black' : 'white';
    row.appendChild(cell);
  }
  table.appendChild(row);
}

document.body.appendChild(table);