<script lang="ts">
	import { currentTranslations } from '../stores/language';
	import LanguageDropdown from './LanguageDropdown.svelte';
</script>

<header class="bg-olive-light text-olive-dark flex w-full items-center justify-around px-3 py-3">
	<img src="Logo" alt="Humac" />
	<ul class="flex gap-x-4">
		<li>{$currentTranslations.aboutTitle}</li>
		<li>{$currentTranslations.contactTitle}</li>
	</ul>
	<LanguageDropdown />
</header>
