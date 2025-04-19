// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Translations {
		welcome: string;
		about: string;
		aboutTitle: string;
		contact: string;
		contactTitle: string;
		bannerTitle1: string;
		bannerTitle2: string;
		bannerContent: string;
		bannerText1: string;
		bannerText2: string;
		bannerText3: string;
		bannerButton: string;
	}
}

export {};
