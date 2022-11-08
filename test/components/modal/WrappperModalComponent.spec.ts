import { withSetup } from './../../test-utils';
import { describe, it } from 'vitest';
import { render } from '@testing-library/vue';
import { WrapperModalComponent } from '@/components';
import { useModal } from '@/composables';

describe('WrapperModalComponent.vue Test', () => {
	const [result] = withSetup(useModal);
	const { getByTestId } = render(WrapperModalComponent);
	it('Find Close Modal', () => {
		getByTestId('closeBtn');
	});
});
