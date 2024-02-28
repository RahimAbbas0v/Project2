import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        All Products
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
       New Collections
      </a>
    ),
  },
];

const App: React.FC = () => (
  <>
    <Dropdown menu={{ items }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
     <a href="">Shop<CaretDownOutlined /></a>
    </Dropdown>
  </>
);

export default App;