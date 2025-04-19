// src/stores/language.ts
import { writable } from 'svelte/store';
import { translations } from '$lib/i18n';

export const currentLanguage = writable<string>('bs');

export const currentTranslations = writable<Translations>(translations['bs']);

export function changeLanguage(newLanguage: string) {
	currentLanguage.set(newLanguage);
	currentTranslations.set(translations[newLanguage]);
}
