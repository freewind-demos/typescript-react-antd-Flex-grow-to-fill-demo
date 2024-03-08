import { Button, Flex, Input } from 'antd';
import React from 'react';

export default function Hello() {
  return <Flex vertical gap="small" style={{ width: 500, border: '2px solid red' }}>
    <Flex gap="small" align="baseline">
      <span style={{ width: 120, textAlign: 'right', border: '2px solid blue' }}>label</span>
      <Input style={{ flex: 1, border: '2px solid green' }} />
    </Flex>
    <Flex gap="small" align="baseline">
      <span style={{ width: 120, textAlign: 'right', border: '2px solid blue' }}>label</span>
      <Flex vertical gap="small" style={{ flex: 1 }}>
        <Input style={{ border: '2px solid green' }} />
        <Input style={{ border: '2px solid green' }} />
      </Flex>
    </Flex>
    <Button>Submit</Button>
  </Flex>
};
