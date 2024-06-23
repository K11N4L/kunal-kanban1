// Function to clear all tasks
export function clearTasks() {
    document.querySelectorAll('.kanban__items').forEach(column => {
      column.innerHTML = '';
    });
  }
  
  // Function to add a new column
  export function addNewColumn(title) {
    const kanban = document.querySelector('.kanban');
  
    const newColumn = document.createElement('div');
    newColumn.className = 'kanban__column';
    newColumn.innerHTML = `
      <div class="kanban__column-title">${title}</div>
      <div class="kanban__items"></div>
      <button class="kanban__add-item" type="button">+ Add</button>
    `;
    kanban.appendChild(newColumn);
  }
  
  // Function to export the board to PDF
  export function exportToPDF() {
    const kanban = document.querySelector('.kanban');
    window.html2canvas(kanban).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new window.jspdf.jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('kanban_board.pdf');
    });
  }
  