
import { render, screen } from '@testing-library/react';
import Table from './Table'; // Import Table component

describe('Table Component', () => {
  const columns = [
    { header: 'Column 1', accessor: 'col1' },
    { header: 'Column 2', accessor: 'col2' },
  ];

  const data = [
    { col1: 'Row 1, Col 1', col2: 'Row 1, Col 2' },
    { col1: 'Row 2, Col 1', col2: 'Row 2, Col 2' },
  ];

  it('renders the table with correct columns and data', () => {
    render(<Table columns={columns} data={data} />);
    columns.forEach((column) => {
      const columnHeader = screen.getByText(column.header);
      expect(columnHeader).toBeInTheDocument();
    });
    data.forEach((row) => {
      Object.values(row).forEach((cellValue) => {
        const cellElement = screen.getByText(cellValue);
        expect(cellElement).toBeInTheDocument();
      });
    });
  });
});
