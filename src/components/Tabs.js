import { clearConfigCache } from 'prettier';
import React, { Component } from 'react';
import styled from 'styled-components';

const STabs = styled.ul`
  color: white;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Tab = styled.li`
  width: 120px;
  height: 40px;
  text-align: center;
  border-bottom: 3px solid ${(props) => (props.current ? '#3498db' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`;
const Title = styled.div`
  font-size: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TabContent = styled.div`
  height: calc(100% - 60px);
  padding: 10px;
  overflow: scroll;
  overflow-x: hidden;
`;

class Tabs extends Component {
  constructor(props) {
    super();
    this.state = {
      activeIndex: 0
    };
  }

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;
    const activeItem = items[activeIndex];
    const ActiveComponent = activeItem.component;
    const activeProps = activeItem.props;

    return (
      <>
        <STabs>
          {items.map((item, index) => (
            <Tab current={activeIndex === index} key={index}>
              <Title>{item.title}</Title>
            </Tab>
          ))}
        </STabs>
        <TabContent>
          <ActiveComponent {...activeProps} />
        </TabContent>
      </>
    );
  }
}

export default Tabs;
