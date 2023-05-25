<script>
	import { goto } from '$app/navigation';
	import { noteStore } from '$lib/stores';
	import { InputChip, toastStore } from '@skeletonlabs/skeleton';

	/**
	 * @type {string[]}
	 */
	let tags = [];

	/**
	 * @param {string} content
	 */
	let content = '';

	/**
	 * @type {import('@skeletonlabs/skeleton').ToastSettings}
	 */
	const t = {
		message: 'Note created successfully',
		background: 'variant-filled-success'
	};

	/**
	 * Create a new note
	 * @returns {void}
	 */
	const createNote = () => {
		noteStore.update((notes) => [
			...notes,
			{
				id: crypto.randomUUID(),
				content,
				tags
			}
		]);
		content = '';
		tags = [];
		toastStore.trigger(t);
		goto('/');
	};
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<form action="" class="card p-4 flex flex-col gap-3">
		<h2>New Note</h2>
		<textarea bind:value={content} rows="5" class="textarea" placeholder="Note content..." />

		<InputChip name="tags" bind:value={tags} placeholder="Tags..." />

		<button type="button" class="btn variant-ghost self-end" on:click={createNote}>
			Create Note
		</button>
	</form>
</div>
