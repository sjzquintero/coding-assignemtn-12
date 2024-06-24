import React from 'react';
import Button from './components/Button';
import Dropdown from './components/Dropdown';
import RadioButton from './components/RadioButton';
import Table from './components/Table';
import HeroImage from './components/HeroImage';


const App: React.FC = () => {
  const tableColumns = [
    { header: 'Header 1', accessor: 'col1' },
    { header: 'Header 2', accessor: 'col2' },
  ];

  const tableData = [
    { col1: 'Row 1 Cell 1', col2: 'Row 1 Cell 2' },
    { col1: 'Row 2 Cell 1', col2: 'Row 2 Cell 2' },
  ];

  return (
    <div>
      <h1>Component Library</h1>
      <section>
        <h2>Button</h2>
        <Button text="Click Me" onClick={() => alert('Button Clicked')} />
      </section>
      
      <section>
        <h2>Dropdown</h2>
        <Dropdown
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
          ]}
          onChange={(value) => console.log(value)}
        />
      </section>

      <section>
        <h2>RadioButton</h2>
        <RadioButton
          label="Radio Option"
          name="radioGroup"
          checked={false}
          onChange={() => console.log('Radio button selected')}
        />
      </section>

      <section>
        <h2>Table</h2>
        <Table columns={tableColumns} data={tableData} />
      </section>

      <section>
        <h2>Hero Image</h2>
        <HeroImage
          title="Hero Title"
          description="Hero Description"
          imageUrl="https://via.placeholder.com/600x400"
        />
      </section>

      
    </div>
  );
};

export default App;
