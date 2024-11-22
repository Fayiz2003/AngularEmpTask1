import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  // Array to store employee details
  employees: { name: string; contact: string; email: string; address: string }[] = [];

  // Modal visibility
  showModal: boolean = false;

  // New employee form data
  newEmployee = {
    name: '',
    contact: '',
    email: '',
    address: '',
  };

  constructor(private elementRef: ElementRef) {}

  // Open the modal
  openAddEmployeeModal() {
    this.showModal = true;
    document.body.classList.add('modal-open'); // Disable background scrolling
  }

  // Close the modal
  closeModal(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.showModal = false;
    document.body.classList.remove('modal-open'); // Re-enable background scrolling
  }

  // Prevent modal from closing when clicking inside
  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  // Add the new employee to the list and render dynamically
  addEmployee() {
    if (
      this.newEmployee.name &&
      this.newEmployee.contact &&
      this.newEmployee.email &&
      this.newEmployee.address
    ) {
      this.employees.push({ ...this.newEmployee });
      // Clear the form
      this.newEmployee = { name: '', contact: '', email: '', address: '' };
      // Render new employee in the table using manual DOM manipulation
      this.renderEmployees();
      // Close the modal
      this.closeModal();
    } else {
      alert('Please fill out all fields!');
    }
  }

  // Render employees dynamically
  renderEmployees() {
    const tableBody = this.elementRef.nativeElement.querySelector('#employeeTableBody');
    tableBody.innerHTML = ''; // Clear the table body

    for (const employee of this.employees) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.contact}</td>
        <td>${employee.email}</td>
        <td>${employee.address}</td>
      `;
      tableBody.appendChild(row);
    }
  }
}

