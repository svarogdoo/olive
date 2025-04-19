<script lang="ts">
	import oliveBg from '$lib/assets/olive-bg.png';
	import { currentTranslations } from '../stores/language';
</script>

<section class="relative flex w-full">
	<div class="from-olive-medium to-olive-light flex w-3/4 bg-gradient-to-r pt-20 pl-20">
		<div class=" text-olive-dark flex flex-col gap-y-20 bg-gradient-to-r">
			<div class="flex flex-col">
				<p class="text-5xl font-bold">14t</p>
				<p class="text-xl font-light">{$currentTranslations.bannerText1}</p>
			</div>
			<div class="flex flex-col">
				<p class="text-5xl font-bold">250</p>
				<p class="text-xl font-light">{$currentTranslations.bannerText2}</p>
			</div>
			<div class="flex flex-col">
				<p class="text-5xl font-bold">100%</p>
				<p class="text-xl font-light">{$currentTranslations.bannerText3}</p>
			</div>
		</div>
		<img
			src={oliveBg}
			alt="Background"
			class="z-10 -mt-40 -ml-16 h-[990px] w-auto object-contain"
		/>
	</div>
	<div class="bg-olive-medium flex w-1/4 items-center justify-center">
		<button
			class="bg-olive-dark text-olive-light pointer-cursor px-16 py-4 font-light tracking-widest shadow-lg transition ease-in-out hover:scale-105"
			>{$currentTranslations.bannerButton}</button
		>
	</div>
	<div class=" absolute top-1/8 right-1/5 flex flex-col gap-y-8">
		<h1 class="text-olive-dark text-7xl font-bold text-wrap">
			{$currentTranslations.bannerTitle1}<br />{$currentTranslations.bannerTitle2}
		</h1>
		<p class="text-olive-dark max-w-108 pl-1 font-light text-wrap">
			{$currentTranslations.bannerContent}
		</p>
	</div>
</section>
