import { render } from '@testing-library/react';

import DashProvider from './dash-provider';

describe('DashProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashProvider />);
    expect(baseElement).toBeTruthy();
  });
});
