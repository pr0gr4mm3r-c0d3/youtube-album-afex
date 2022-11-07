<script lang="ts" setup>
import { AddVideoComponent, ListVideosComponent } from '@/components';
</script>
<template>
	<section id="wrapper">
		<AddVideoComponent />
		<ListVideosComponent />
	</section>
</template>
<style lang="scss" scoped>
#wrapper {
	min-width: 300px;
	max-width: 1076px;
	padding: 15px;
	margin: auto;
}
</style>
