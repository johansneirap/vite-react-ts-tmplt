import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../../src/App';

it('renders hello message', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
