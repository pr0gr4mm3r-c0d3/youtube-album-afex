<script lang="ts" setup>
import { useVideoStore } from '@/stores';
const { getVideoSelected } = useVideoStore();
const { title, description, id } = getVideoSelected!;
</script>
<template>
	<section class="modal__content">
		<div class="video__frame">
			<iframe :src="`https://www.youtube.com/embed/${id}?controls=0`">
			</iframe>
		</div>
		<div class="video__details">
			<h3 class="video__details-title">{{ title }}</h3>
			<p class="video__details-description">{{ description }}</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.modal__content {
	min-width: 300px;
	max-width: 1024px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.video__details {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 15px;
		min-height: 250px;
		margin-bottom: 20px;
		&-title {
			margin: 16px 0;
		}
	}
	.video__frame {
		width: 100%;
		iframe {
			border-radius: 10px;
			width: 100%;
			height: 308px !important;
			object-fit: cover;
		}
	}
}

@media only screen and (min-width: 1024px) {
	.modal__content {
		flex-direction: row;
		.video__frame {
			iframe {
				height: 100%;
			}
		}
	}
}
</style>
