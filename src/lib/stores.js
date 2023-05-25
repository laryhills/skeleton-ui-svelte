import { localStorageStore } from '@skeletonlabs/skeleton';

// defijne a type Jsdocs

/**
 * @typedef {Object} Note
 * @property {string} id
 * @property {string} content
 * @property {string[]} tags
 **/

/**
 * @type {import('svelte/store').Writable<Note[]>}
 *
 */
export const noteStore = localStorageStore('notes', []);
