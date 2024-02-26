import React from 'react';
import {Form} from 'react-bootstrap';

function PageSelect({currentPage, totalPages, onChange}) {
  const pageOptions = [];
  for (let i = 1; i <= totalPages; i++) {
    pageOptions.push(<option key={i} value={i}>Trang {i}</option>);
  }

  return (
    <Form.Select 
      aria-label="Default select example" 
      className='input-page' 
      value={currentPage}
      onChange={(e) => onChange(parseInt(e.target.value))}
    >
      {pageOptions}
    </Form.Select>
  );
}

export default PageSelect;
