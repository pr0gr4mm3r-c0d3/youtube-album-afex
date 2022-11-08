<script lang="ts" setup>
import { useModal } from '@/composables';
const { handlerCloseModal } = useModal();
</script>

<template>
	<div class="modal__wrapper">
		<section class="modal__container">
			<header class="modal__header">
				<span
					data-testId="closeBtn"
					class="modal__close"
					@click="handlerCloseModal"
					>X</span
				>
			</header>

			<section class="modal__body">
				<slot name="content"> </slot>
			</section>
		</section>
	</div>
</template>
<style lang="scss">
.modal__wrapper {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity 0.5 ease-in-out;
}

.modal__container {
	min-width: 300px;
	max-width: 80%;
	max-height: 80%;
	overflow: auto;
	background-color: #fff;
	margin: 0px auto;
	padding: 15px 30px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	border-radius: 15px;
	transition: all 0.5s ease-in-out;
}

.modal__header {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	.modal__close {
		font-size: 30px;
		font-weight: bold;
		cursor: pointer;
	}
}

.modal__enter-from,
.modal__leave-to {
	opacity: 0;
}

.modal__enter-active .modal__container,
.modal__leave-active .modal__container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}

@media screen and (min-width: 768px) {
	.modal__container {
		padding: 30px 60px;
	}
}
</style>
