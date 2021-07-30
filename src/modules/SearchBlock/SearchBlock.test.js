import { render, screen } from '@testing-library/react';
import { SearchBlock } from './index';

test('renders search button', () => {
    render(<SearchBlock />);
    const button = screen.getByText(/Search/i);
    expect(button).toBeInTheDocument();
});
