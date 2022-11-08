<script lang="ts" setup>
import { useCardVideo } from '@/composables';
import { VideoDTO } from '@/DTO/VideoDTO';
const {
	handlerClickOnDeleteVideo,
	handlerClickViewDetailsVideo,
	processDurationVideo,
} = useCardVideo();
interface IProps {
	video: VideoDTO;
}
const { video } = defineProps<IProps>();
</script>
<template>
	<div class="card">
		<img
			class="card__delete"
			src="../assets/svg/card_close.svg"
			alt="Delete Icon"
			data-testId="deleteVideoIcon"
			@click="() => handlerClickOnDeleteVideo(video.id)"
		/>
		<img
			class="card__img"
			:src="video.thumbnails"
			:alt="video.title"
			@click="() => handlerClickViewDetailsVideo(video)"
		/>
		<span class="card__time">{{
			processDurationVideo(video.duration)
		}}</span>
	</div>
</template>

<style lang="scss" scoped>
.card {
	position: relative;
	background: #fbfbfb;
	height: 150px;
	width: 263px;
	cursor: pointer;
	transition: 0.1s ease-in-out;
	&:hover {
		transform: scale(1.1);
	}
	&__img {
		height: 150px;
		width: 263px;
		object-fit: cover;
	}
	&__delete {
		position: absolute;
		top: 8px;
		right: 9px;
		background: #f5f5f5;
	}
	&__time {
		position: absolute;
		bottom: 8px;
		padding: 0.2rem;
		border-radius: 4px;
		right: 8px;
		background-color: #000a;
		color: #f5f5f5;
	}
}
</style>
