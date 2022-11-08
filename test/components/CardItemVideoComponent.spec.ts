import { withSetup } from './../test-utils';
import { describe, it, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/vue';
import {
	CardItemVideoComponent,
	DeleteModalContentComponent,
	DetailModalContentComponent,
	WrapperModalComponent,
} from '@/components';
import { processDurationVideo } from '@/helpers';
import { useCardVideo } from '@/composables';

describe('CardItemVideoComponent.vue Test', () => {
	withSetup(useCardVideo);
	const video = {
		id: 'IDVideo',
		title: 'Some Title',
		description: 'Some Description',
		duration: 'PT1H50M30S',
		thumbnails: 'urlPicture',
		url: 'urlVideo',
	};
	const renderComponent = () =>
		render(CardItemVideoComponent, {
			props: {
				video,
			},
		});
	it('Find Match Alt img Test', () => {
		renderComponent().getByAltText(video.title);
	});
	describe('Duration Video Process and Find', () => {
		const textResult = '1:50:30';
		it('processDurationVideo Function Expect Result', () => {
			expect(processDurationVideo(video.duration)).toEqual(textResult);
		});
		it('Render TextResult in Component', () => {
			renderComponent().getByText(textResult);
		});
	});
	describe('handlerClickEvent Img CardVideoComponent Test', () => {
		it('Render Modal with Detail Video', async () => {
			const img = renderComponent().getByAltText(video.title);
			await fireEvent.click(img);
			render(WrapperModalComponent);
			const renderDetail = render(DetailModalContentComponent);
			renderDetail.getByText(video.title);
			renderDetail.getByText(video.description);
		});
	});
	describe('handlerClickEvent Close[delete] CardVideoComponent Test', () => {
		it('Render Modal with content Delete Video', async () => {
			const del = renderComponent().getByTestId('deleteVideoIcon');
			await fireEvent.click(del);
			render(WrapperModalComponent);
			const renderDeleteModalContent = render(
				DeleteModalContentComponent
			);
			renderDeleteModalContent.getByText(
				'¿Seguro que quieres eliminar este video?'
			);
			renderDeleteModalContent.getByText('Cancelar');
		});
	});
});
