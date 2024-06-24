
import { Meta, StoryFn } from '@storybook/react';
import Table, { TableProps } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { header: 'Column 1', accessor: 'col1' },
    { header: 'Column 2', accessor: 'col2' },
  ],
  data: [
    { col1: 'Row 1, Col 1', col2: 'Row 1, Col 2' },
    { col1: 'Row 2, Col 1', col2: 'Row 2, Col 2' },
  ],
};
