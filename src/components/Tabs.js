import React, { useState } from 'react';
import styled from 'styled-components';

const STabs = styled.ul`
  color: white;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;
const Tab = styled.li`
  width: 120px;
  height: 40px;
  text-align: center;
  background-color: ${(props) => (props.current ? 'rgb(255, 255, 255, 0.1)' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TabContent = styled.div`
  height: calc(100% - 40px);
  padding: 10px;
  overflow: scroll;
  overflow-x: hidden;
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 5px;
  &::-webkit-scrollbar {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 255, 0.1);
    border-radius: 10px;
  }
`;

const Tabs = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = items[activeIndex];
  const ActiveComponent = activeItem.component;
  const activeProps = activeItem.props;

  return (
    <>
      <STabs>
        {items.map((item, index) => (
          <Tab current={activeIndex === index} key={index} onClick={() => setActiveIndex(index)}>
            <Title>{item.title}</Title>
          </Tab>
        ))}
      </STabs>
      <TabContent>
        <ActiveComponent {...activeProps} />
      </TabContent>
    </>
  );
};

export default Tabs;
