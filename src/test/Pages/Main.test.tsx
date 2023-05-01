import { render, screen } from '@testing-library/react';
import { MainPage } from 'components/Pages';

test('render Main Page', () => {
    render(<MainPage />);

    const h1Tag = screen.getByText(/this is main page/i);
    expect(h1Tag).toBeInTheDocument();
})