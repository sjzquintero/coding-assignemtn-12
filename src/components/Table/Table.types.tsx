// src/components/Table/Table.types.tsx

export interface TableColumn {
  header: string;
  accessor: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
}
