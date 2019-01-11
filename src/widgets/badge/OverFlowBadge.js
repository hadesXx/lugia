import React from 'react';
import { Badge, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
`;
const Box = styled.div`
  width: 40px;
  height: 40px;
  background: #ccc;
  margin-left: 10px;
`;
export default class OverFlowBadge extends React.Component<any, any> {

  render () {
    return (
      <Wrapper>
        <Badge overFlow={9} count={8}>
          <Box/>
        </Badge>
        <Badge overFlow={99} count={88}>
          <Box/>
        </Badge>
        <Badge overFlow={999} count={888}>
          <Box/>
        </Badge>
      </Wrapper>);
  }
}
