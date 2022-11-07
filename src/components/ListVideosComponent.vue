<script lang="ts" setup>
import { AtomSpinner } from 'epic-spinners';
import {
	CardItemVideoComponent,
	WrapperModalComponent,
	DeleteModalContentComponent,
	DetailModalContentComponent,
} from '@/components';
import { useUIStore, useVideoStore } from '@/stores';
const { uiState } = useUIStore();
const { videosState } = useVideoStore();
</script>
<template>
	<div class="list__container">
		<template v-if="uiState.loading">
			<atom-spinner
				:animation-duration="1000"
				:size="160"
				:color="'#136ae4'"
			/>
		</template>
		<template v-else>
			<template v-if="videosState.videos.length !== 0">
				<div v-for="video in videosState.videos" :key="video.id">
					<CardItemVideoComponent :video="video" />
				</div>
				<WrapperModalComponent v-if="uiState.modalShow">
					<template v-slot:content>
						<template v-if="videosState.videoSelected !== null">
							<DetailModalContentComponent />
						</template>
						<template v-else>
							<DeleteModalContentComponent />
						</template>
					</template>
				</WrapperModalComponent>
			</template>
			<template v-else>
				<h2 class="not__videos">
					🙅‍♂️ No has añadido ningún video aún 🙅‍♀️
				</h2>
			</template>
		</template>
	</div>
</template>
<style lang="scss">
.list__container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 70px 87px;
	margin: 134px auto 100px;
}
.not__videos {
	color: rgba(143, 2, 2, 0.801);
}
</style>
