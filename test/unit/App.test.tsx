import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from 'App';

it('initial test', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
