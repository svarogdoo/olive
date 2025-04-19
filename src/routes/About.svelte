<script lang="ts">
	import { currentTranslations } from '../stores/language';
	import oliveHarvest from '$lib/assets/olive-harvest.jpg';
</script>

<section
	id="about"
	class="bg-olive-meddark flex w-full flex-col gap-y-6 px-4 py-10 lg:gap-y-12 lg:px-32 lg:py-20"
>
	<h2 class="text-olive-light text-3xl font-bold lg:text-6xl">{$currentTranslations.aboutTitle}</h2>
	<div
		class="text-olive-light flex flex-col items-center justify-between gap-x-20 gap-y-10 lg:flex-row"
	>
		<div class="flex flex-col gap-y-4 text-justify text-lg">
			<p>{$currentTranslations.aboutContent}</p>
			<p>{$currentTranslations.aboutContent}</p>
			<p>{$currentTranslations.aboutContent}</p>
		</div>
		<img src={oliveHarvest} alt="Branje maslina" class="h-80 w-80 object-cover lg:h-124 lg:w-124" />
	</div>
</section>
