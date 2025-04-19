<script lang="ts">
	import { currentTranslations } from '../stores/language';
	import LanguageDropdown from './LanguageDropdown.svelte';
</script>

<header
	class="bg-olive-light text-olive-dark flex w-full items-center justify-between px-5 py-4 md:justify-around"
>
	<p class="tracking-widest italic">HUMAC</p>
	<ul class="flex gap-x-4 lg:gap-x-12">
		<a href="#about">{$currentTranslations.aboutTitle}</a>
		<a href="#contact">{$currentTranslations.contactTitle}</a>
	</ul>
	<LanguageDropdown />
</header>
