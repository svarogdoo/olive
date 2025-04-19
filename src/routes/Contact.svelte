<script>
	import { currentTranslations } from '../stores/language';
</script>

<section
	id="contact"
	class="bg-olive-light relative flex w-full flex-col gap-y-12 px-4 py-10 lg:px-32 lg:py-20"
>
	<h2 class="text-olive-meddark text-center text-3xl font-bold">
		{$currentTranslations.contact}
	</h2>
	<div class="flex w-full flex-col justify-center gap-y-6 tracking-wider">
		<a href="tel:+387123456789" class="text-olive-meddark text-center text-lg md:text-xl">
			<span class="font-bold">{$currentTranslations.contactTitle}: </span>
			<span class="ml-4">+387 12 34 56 789</span>
		</a>
		<a href="email:humac@gmail.com" class="text-olive-meddark text-center text-lg md:text-xl">
			<span class="font-bold">Email: </span>
			<span class="ml-4">humac@gmail.com</span>
		</a>
	</div>
</section>
