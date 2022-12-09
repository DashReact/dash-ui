import styled from 'styled-components';
import { useTheme } from '@dash-ui-lib/theme';
import { Button } from '@dash-ui-lib/button';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledPage>
      <Button onClick={toggleTheme}>changetheme</Button>
      <div className="w-full h-12 dark:bg-slate-800 text-primary-100">
        <div className="">{theme}</div>
      </div>
    </StyledPage>
  );
}

export default Index;
