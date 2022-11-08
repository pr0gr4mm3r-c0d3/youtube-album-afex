import { describe, it } from 'vitest';
import { render } from '@testing-library/vue';
import { AddVideoComponent } from '@/components';

describe('AddVideoComponent.vue Test', () => {
	const renderComponent = () => render(AddVideoComponent);
	it('renders title when component is created', () => {
		renderComponent().getByText('Añadir nuevo video');
	});
	it('render input when component is created', async () => {
		renderComponent().getByTestId('input-testId');
	});
});
