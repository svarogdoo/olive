<script lang="ts">
	import { currentLanguage, changeLanguage } from '../stores/language';

	// Type definition for the language dropdown options
	interface Language {
		code: string;
		label: string;
		flag: string;
	}

	let dropdownOpen = false;
	const languages: Language[] = [
		{ code: 'en', label: 'EN', flag: '🇬🇧' },
		// { code: 'sr', label: 'SRB', flag: '🇷🇸' },
		{ code: 'bs', label: 'BIH', flag: '🇧🇦' }
		// { code: 'hr', label: 'HR', flag: '🇭🇷' }
	];

	function selectLanguage(code: string) {
		changeLanguage(code);
		dropdownOpen = false;
	}
</script>

<div class="text-olive-dark flex justify-end p-4">
	<div class="relative inline-block text-left">
		<button
			class="bg-olive-light inline-flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
			on:click={() => (dropdownOpen = !dropdownOpen)}
		>
			{#each languages as lang (lang.code)}
				{#if $currentLanguage === lang.code}
					<span class="flex items-center gap-x-2"
						><span class="text-xl">{lang.flag}</span> {lang.label}</span
					>
				{/if}
			{/each}
			<svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0L5.21 8.27a.75.75 0 01.02-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>

		{#if dropdownOpen}
			<div
				class="ring-opacity-5 bg-olive-light ring-olive-meddark absolute right-0 z-20 mt-2 w-28 origin-top-right rounded-md shadow-lg ring-1"
			>
				<div class="py-1">
					{#each languages as lang}
						<button
							class="text-olive-dark flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100"
							on:click={() => selectLanguage(lang.code)}
						>
							<span class="mr-2">{lang.flag}</span>
							{lang.label}
						</button>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
