import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const STYLES = {
  small: {
    iconSize: 16,
    height: 24/16,
    fontSize: 14/16,
    borderThickness: 1,
    spacing: 24
  },
  large: {
    iconSize: 24,
    height: 36/16,
    fontSize: 18/14,
    borderThickness: 2,
    spacing: 36
  }
}
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error (`Invalid size passed to IconInput: ${size}`)
  }
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': styles.iconSize + 'px'}}>
        <Icon id={icon} size={styles.iconSize}/> 
      </IconWrapper>
      <TextInput {...delegated} 
        style={{
          '--width': width + 'px', 
          '--height': styles.height + 'rem',
          '--fontSize': styles.fontSize + 'rem',
          '--borderThickness': styles.borderThickness + 'px',
          '--spacing': styles.spacing + 'px'
          }} />
    </Wrapper>

  );
};

const Wrapper = styled.label `
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black}
  }
`

const TextInput = styled.input `
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  padding-left: var(--spacing);
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`
const IconWrapper = styled.div `
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
`

export default IconInput;
