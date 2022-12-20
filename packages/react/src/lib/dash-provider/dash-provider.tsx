import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@dash-ui-lib/theme';

/* eslint-disable-next-line */
export interface DashProviderProps {
  theme?: string;
  children?: React.ReactNode;
}

export function DashProvider(props: DashProviderProps) {
  return <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>;
}

DashProvider.defaultProps = {
  theme: defaultTheme,
};

export default DashProvider;
