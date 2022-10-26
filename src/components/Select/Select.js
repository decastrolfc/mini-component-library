import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper> 
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{'--size': 24 + 'px'}}>
          <Icon id="chevron-down" size={24} strokeWidth={1}/>
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div `
  position: relative;
  width: max-content;
`
const NativeSelect = styled.select `
  position: absolute;
  top:0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`

const PresentationalBit = styled.div `
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: {16 / 16} px;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;´

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px solid -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`
const IconWrapper = styled.div `
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`
export default Select;
