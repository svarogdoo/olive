<script lang="ts">
	import oliveBgLeft from '$lib/assets/olive-bg-1.png';
	import oliveBgBottom from '$lib/assets/olive-bg-2.png';
	import { currentTranslations } from '../stores/language';
</script>

<section class="relative hidden w-full md:flex">
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
					<h1 class="text-olive-dark text-6xl font-bold text-wrap">
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
		<a
			href="#contact"
			class="bg-olive-dark text-olive-light pointer-cursor px-16 py-4 font-light tracking-widest shadow-lg transition ease-in-out hover:scale-105"
		>
			{$currentTranslations.bannerButton}
		</a>
	</div>
</section>

<section class="relative flex w-full flex-col md:hidden">
	<div
		class="from-olive-medium to-olive-light flex w-full flex-col bg-gradient-to-r px-4 pt-28 pb-12"
	>
		<h1 class="text-olive-dark w-20 pl-4 text-3xl leading-relaxed font-bold text-wrap">
			{$currentTranslations.bannerTitle1}<br />{$currentTranslations.bannerTitle2}
		</h1>
		<img src={oliveBgLeft} alt="Background" class="-my-60 h-[400px] w-auto object-contain" />
		<div class="text-olive-dark mt-76 flex justify-center gap-x-8 bg-gradient-to-r text-center">
			<div class="flex flex-col">
				<p class="text-2xl font-bold">14t</p>
				<p class="text-md font-light">{$currentTranslations.bannerText1}</p>
			</div>
			<div class="flex flex-col">
				<p class="text-2xl font-bold">250</p>
				<p class="text-md font-light">{$currentTranslations.bannerText2}</p>
			</div>
			<div class="flex flex-col">
				<p class="text-2xl font-bold">100%</p>
				<p class="text-md font-light">{$currentTranslations.bannerText3}</p>
			</div>
		</div>
	</div>
	<div
		class="bg-olive-medium gird-cols-3 grid w-full items-center justify-center gap-y-12 px-4 py-10 text-justify"
	>
		<p class="text-olive-dark max-w-108 pl-1 font-light text-wrap">
			{$currentTranslations.bannerContent}
		</p>
		<a
			href="#contact"
			class="bg-olive-dark text-olive-light pointer-cursor px-16 py-4 font-light tracking-widest shadow-lg transition ease-in-out hover:scale-105"
		>
			{$currentTranslations.bannerButton}
		</a>
	</div>
</section>
