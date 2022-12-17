import { ThemeProvider } from "styled-components";

/* eslint-disable-next-line */
export interface DashProviderProps {
  theme?: string;
  children?: React.ReactNode;
}


export function DashProvider(props: DashProviderProps) {
  return (
      <ThemeProvider theme={props.theme}>
        {props.children}
      </ThemeProvider>
  );
}

DashProvider.defaultProps = {
  
};

export default DashProvider;
