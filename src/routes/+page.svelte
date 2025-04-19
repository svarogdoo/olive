<script lang="ts">
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Header from './Header.svelte';
	import MainBanner from './MainBanner.svelte';
</script>

<main>
	<Header />

	<MainBanner />

	<About />

	<Contact />

	<footer
		class="text-olive-meddark bg-olive-light w-full py-2 text-center text-xs font-light tracking-widest"
	>
		©Copyright Svarog
	</footer>
</main>

<style>
</style>
