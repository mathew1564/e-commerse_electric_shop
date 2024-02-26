import React, { useState , useEffect} from 'react'
import {  Row,Dropdown } from 'react-bootstrap'
//icon
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { BiFilterAlt } from 'react-icons/bi'
//css
import './filterbar.css'
function FilterBar() {
  const [selectedFilterLeft, setSelectedFilterLeft] = useState('Tất cả');
  const [selectedFilterRight, setSelectedFilterRight] = useState('Mới nhất');

  const handleFilterChangeLeft = (event) => {
    setSelectedFilterLeft(event.target.value);
  };
  const handleFilterChangeRight = (event) => {
    setSelectedFilterRight(event.target.value);
  };
  return (
    <Row>    
      <div className='filter'>
        <div className='fit-filter'>
             {/* filter-left */}
        <Dropdown className="dropdown filter-right">
          <Dropdown.Toggle className='btn-filter btn-light' >
            <BiFilterAlt className='icon-filter '/> &nbsp;
            <span>Hiển thị: </span>
            <b>{selectedFilterLeft}</b>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <input
                type="radio"
                name="filter"
                value="Tất cả"
                checked={selectedFilterLeft === 'Tất cả'}
                onChange={handleFilterChangeLeft}
              />{' '}
              Tất cả
            </Dropdown.Item>
            <Dropdown.Item>
              <input
                type="radio"
                name="filter"
                value="Nổi bật"
                checked={selectedFilterLeft === 'Nổi bật'}
                onChange={handleFilterChangeLeft}
              />{' '}
              Nổi bật
            </Dropdown.Item>
            <Dropdown.Item>
              <input
                type="radio"
                name="filter"
                value="Giảm giá"
                checked={selectedFilterLeft === 'Giảm giá'}
                onChange={handleFilterChangeLeft}
              />{' '}
              Giảm giá
            </Dropdown.Item>
            <Dropdown.Item>
              <input
                type="radio"
                name="filter"
                value="Còn hàng"
                checked={selectedFilterLeft === 'Còn hàng'}
                onChange={handleFilterChangeLeft}
              />{' '}
              Còn hàng
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* filter right */}
        <Dropdown className="dropdown">
          <Dropdown.Toggle className='btn-filter btn-light'>
            &nbsp;
            <span>Sắp xếp: </span>
            <b>{selectedFilterRight}</b> <MdKeyboardDoubleArrowDown className='icon-filter' />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <input
                type="radio"
                name="filter1"
                value="Mới nhất"
                checked={selectedFilterRight === 'Mới nhất'}
                onChange={handleFilterChangeRight}
              />{' '}
              Mới nhất
            </Dropdown.Item>
            <Dropdown.Item>
              <input
                type="radio"
                name="filter1"
                value="Giá Thấp"
                checked={selectedFilterRight === 'Giá thấp'}
                onChange={handleFilterChangeRight}
              />{' '}
              Giá Thấp
            </Dropdown.Item>
            <Dropdown.Item>
              <input
                type="radio"
                name="filter1"
                value="Giá Cao"
                checked={selectedFilterRight === 'Giá Cao'}
                onChange={handleFilterChangeRight}
              />{' '}
              Giá Cao
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
       
      </div>
    </Row>
  );
}

export default FilterBar;