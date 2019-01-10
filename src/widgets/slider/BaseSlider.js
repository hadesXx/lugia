import React from 'react';
import {DemoItem} from './styled'; 
import { Slider } from '@lugia/lugia-web';
export default class BaseSlider extends React.Component {
  onchange = v => {
  };
  render() {
    return (
      <div>
        <DemoItem>
          <Slider defaultValue={5} tips/>
        </DemoItem><br/>
        <DemoItem>
          <Slider defaultValue={[5,15]} tips/>
        </DemoItem>
      </div>
    );
  }
}
