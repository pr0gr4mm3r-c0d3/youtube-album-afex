import { assert, describe, expect, it } from 'vitest';
import { render } from '@testing-library/vue';
import { WrapperModalComponent } from '@/components';
import { useModal } from '@/composables';
import { withSetup } from '@test/test-utils';
import { useUIStore, useVideoStore } from '@/stores';

describe('useModal Composable Test', () => {
	withSetup(useModal);
	describe('handlerCloseModal', () => {
		const { handlerCloseModal } = useModal();
		handlerCloseModal();
		it('Check Modal Show is False', () => {
			const uiStore = useUIStore();
			assert.isNotTrue(uiStore.uiState.modalShow);
		});
		it('idVideoToDelete is NULL', () => {
			const videoStore = useVideoStore();
			assert.isNotTrue(videoStore.videosState.idVideoToDelete);
		});
		it('videoSelected is NULL', () => {
			const videoStore = useVideoStore();
			assert.isNotTrue(videoStore.videosState.videoSelected);
		});
	});
	describe('handlerShowModal', () => {
		it('Check Modal Show is True', () => {
			const { handlerShowModal } = useModal();
			handlerShowModal();
			const uiStore = useUIStore();
			assert.isTrue(uiStore.uiState.modalShow);
		});
	});
});
