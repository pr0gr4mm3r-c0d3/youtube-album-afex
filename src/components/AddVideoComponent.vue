<script lang="ts" setup>
import { useAddVideo } from '@/composables';
const { url, inputRef, handlerAddVideo } = useAddVideo();
</script>
<template>
	<section class="container">
		<h2 class="add__title">Añadir nuevo video</h2>
		<form class="add__container" @submit="handlerAddVideo">
			<input
				ref="inputRef"
				v-model="url"
				class="add__input"
				type="text"
				placeholder="Añadir"
				autocomplete="off"
				autofocus
				data-testId="input-testId"
			/>
			<button type="submit" class="add__btn">Añadir</button>
		</form>
	</section>
</template>

<style lang="scss" scoped>
section {
	margin-top: 70px;
}
.add {
	&__container {
		display: flex;
		flex-direction: column;
		margin: auto;
		gap: 10px;
		// align-items: stretch;
	}

	&__title,
	&__input {
		font-family: 'Roboto';
		font-style: normal;
	}
	&__title {
		font-weight: 500;
		font-size: 28.329px;
		line-height: 38px;
		margin: 16px 0;
	}
	&__input {
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
		box-sizing: border-box;
		width: 100%;
		max-width: 823px;
		height: 57px;
		padding: 10px 23px;
		background: #fff;
		border: 1px solid rgba(0, 0, 0, 0.3);
		border-radius: 5px 0px 0px 5px;
		&-error {
			border: 2px solid rgb(151, 36, 36);
		}
	}

	&__btn {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 21px;
		min-height: 50px;
		width: 100%;
		margin: auto;
		color: #fbfbfb;
		cursor: pointer;
		background: #136ae4;
		box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2),
			0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14);
		border-radius: 10px;
	}
}
.title {
	font-family: Roboto;
	font-size: 28px;
	font-weight: 500;
	line-height: 38px;
	letter-spacing: 0em;
	text-align: left;
}
@media screen and (min-width: 600px) {
	.add {
		&__container {
			flex-direction: row;
			gap: 0;
			align-items: stretch;
		}
		&__btn {
			align-self: stretch;
			border-radius: 0 10px 10px 0;
			margin: 0;
			width: 253px;
		}
	}
}
</style>
