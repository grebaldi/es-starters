import React, { ReactNode } from "react";
import styled from "styled-components";

type Alignment = 'left' | 'center' | 'right';

interface ButtonProps {
  type: 'link' | 'submit' | 'button' | 'none',
  alignment?: Alignment | 'auto',
  className?: string,
  href?: string,
  children?: ReactNode
}

const ButtonContainer = styled.div<{ alignment: Alignment }>`
    display: flex;
    justify-content: ${props => props.alignment === 'left' ? 'flex-start' : (
    props.alignment === 'right' ? 'flex-end' : 'center'
  )};
`;

function Button(props: ButtonProps) {
  const button = React.createElement(
    props.type === 'link' ? 'a' : (
      props.type === 'button' || props.type === 'submit' ?
        'button' : 'span'
    ),
    {
      className: props.className,
      type: props.type === 'button' || props.type === 'submit' ? props.type : undefined,
      href: props.type === 'link' ? props.href : undefined,
      children: props.children
    }
  );

  if (!props.alignment || props.alignment === 'auto') {
    return button;
  }

  return (
    <ButtonContainer alignment={props.alignment}>
      {button}
    </ButtonContainer>
  );
}

export default styled(Button)`
    display: inline-block;
    padding: 1em 3em;
    border: none;
    outline: none;
    font: inherit;
    color: inherit;
    background: chocolate;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, .5);
    text-decoration: none;

    &:hover {
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .5);
    }

    &:active {
        box-shadow: none;
    }
`;
