<script lang="ts" setup>
import { useDeleteVideo, useModal } from '@/composables';
const { handlerClickDeleteVideo } = useDeleteVideo();
const { handlerCloseModal } = useModal();
</script>
<template>
	<section class="modal__content">
		<p class="text">¿Seguro que quieres eliminar este video?</p>
		<div class="modal__actions">
			<button class="btn btn__cancel" @click="handlerCloseModal">
				Cancelar
			</button>
			<button class="btn btn__confirm" @click="handlerClickDeleteVideo">
				Eliminar
			</button>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.modal__content {
	min-width: 300px;
	max-width: 900px;

	.text {
		font-size: 24px;
		font-weight: 500;
		line-height: 38px;
		letter-spacing: 0em;
		margin-bottom: 45px;
		text-align: center;
	}
	.modal__actions {
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
		gap: 5px;
		.btn {
			cursor: pointer;
			height: 57px;
			width: 100%;
			border-radius: 10px;
			padding: 7px 20px;
			// max-width: 253px;
			&__cancel {
				background: transparent;
				border: 2px solid #136ae4;
				color: #136ae4;
				box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2),
					0px 1px 4px rgba(0, 0, 0, 0.12),
					0px 2px 2px rgba(0, 0, 0, 0.14);
			}
			&__confirm {
				color: #fbfbfb;
				background: #136ae4;
				box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2),
					0px 1px 4px rgba(0, 0, 0, 0.12),
					0px 2px 2px rgba(0, 0, 0, 0.14);
			}
		}
	}
}

@media screen and (min-width: 768px) {
	.modal__content {
		.text {
			text-align: left;
		}
		.modal__actions {
			flex-direction: row;
			.btn {
				width: 253px;
			}
		}
	}
}
@media screen and (min-width: 1024px) {
	.modal__content {
		width: 900px;
	}
}
</style>
