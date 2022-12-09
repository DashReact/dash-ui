import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = styled.div``;

export function Button(props: ButtonProps) {
  return (
    <StyledButton>
      <button
        onClick={props.onClick}
        className="rounded p-2 bg-primary-400 color-slate-800 hover:bg-primary-500 dark:text-slate-100 m-2"
      >
        {props.children}
      </button>
    </StyledButton>
  );
}

export default Button;
