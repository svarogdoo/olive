<script lang="ts">
	import oliveBgLeft from '$lib/assets/olive-bg-1.png';
	import oliveBgBottom from '$lib/assets/olive-bg-2.png';
	import { currentTranslations } from '../stores/language';
</script>

<section class="relative flex w-full">
	<div class="from-olive-medium to-olive-light flex w-3/4 bg-gradient-to-r py-20 pl-20">
		<div class=" text-olive-dark mt-8 ml-12 flex flex-col gap-y-20 bg-gradient-to-r">
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
		<div class="relative flex h-full gap-x-8">
			<img src={oliveBgLeft} alt="Background" class="-ml-40 h-[650px] w-auto object-contain" />
			<div class="flex h-full flex-col pt-8">
				<div class="z-20 flex flex-col gap-y-8">
					<h1 class="text-olive-dark text-7xl font-bold text-wrap">
						{$currentTranslations.bannerTitle1}<br />{$currentTranslations.bannerTitle2}
					</h1>
					<p class="text-olive-dark max-w-108 pl-1 font-light text-wrap">
						{$currentTranslations.bannerContent}
					</p>
				</div>
				<img
					src={oliveBgBottom}
					alt="Background"
					class="absoulte z-20 h-[300px] w-auto translate-x-12 object-contain"
				/>
			</div>
		</div>
	</div>
	<div class="bg-olive-medium flex w-1/4 items-center justify-center">
		<button
			class="bg-olive-dark text-olive-light pointer-cursor px-16 py-4 font-light tracking-widest shadow-lg transition ease-in-out hover:scale-105"
			>{$currentTranslations.bannerButton}</button
		>
	</div>
</section>
