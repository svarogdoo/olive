<script lang="ts">
	import { currentTranslations } from '../stores/language';
	import oliveHarvest from '$lib/assets/olive-harvest.jpg';
</script>

<section class="bg-olive-meddark flex w-full flex-col gap-y-12 px-32 py-20">
	<h2 class="text-olive-light text-6xl font-bold">{$currentTranslations.aboutTitle}</h2>
	<div class="text-olive-light flex justify-between gap-x-20">
		<div class="flex flex-col gap-y-4 text-lg">
			<p>{$currentTranslations.aboutContent}</p>
			<p>{$currentTranslations.aboutContent}</p>
			<p>{$currentTranslations.aboutContent}</p>
		</div>
		<img src={oliveHarvest} alt="Branje maslina" class="h-124 w-124 object-cover" />
	</div>
</section>
