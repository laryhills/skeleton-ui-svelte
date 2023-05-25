<script>
	import { goto } from '$app/navigation';
	import { noteStore } from '$lib/stores';
	import { InputChip, ProgressRadial, toastStore } from '@skeletonlabs/skeleton';

	let loading = false;

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
		if (!content) {
			toastStore.trigger({
				message: 'Note content is required',
				background: 'variant-filled-error'
			});
			return;
		}
		loading = true;
		// delay for 1 second to simulate a network request
		setTimeout(() => {
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
			loading = false;
			toastStore.trigger(t);
			goto('/');
		}, 1200);
	};
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<form action="" class="card p-4 flex flex-col gap-3">
		<h2>New Note</h2>
		<textarea bind:value={content} rows="5" class="textarea" placeholder="Note content..." />

		<InputChip name="tags" bind:value={tags} placeholder="Tags..." />

		<button
			type="button"
			disabled={loading}
			class="btn variant-ghost self-end"
			on:click={createNote}
		>
			{#if loading}
				<ProgressRadial width="w-6" />
			{/if}
			<p>Create Note</p>
		</button>
	</form>
</div>
