/**
 * title: 普通波浪
 * description: 普通的波浪，可用于网站中增加美感。
 */

import React from 'react';
import { Wave } from '@wind-design/graceco';

function DefaultWave() {
  return (
    <div style={{ width: "100%" }}>
      <Wave height={170} color='red'/>
    </div>
  );
}

export default DefaultWave;
