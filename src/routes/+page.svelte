<script>
	import { noteStore } from '$lib/stores';
	import { modalStore, toastStore } from '@skeletonlabs/skeleton';

	/**
	 *
	 * @param {string} id
	 * @returns {void}
	 */
	const deleteNote = (id) => {
		/** @type {import('@skeletonlabs/skeleton').ModalSettings} */
		const confirmDelete = {
			type: 'confirm',
			title: 'Delete Note',
			body: 'Are you sure you want to delete this note?',
			response: (/** @type {boolean} */ r) => {
				if (r) {
					noteStore.update((notes) => notes.filter((note) => note.id !== id));
					toastStore.trigger({
						message: 'Note deleted successfully',
						background: 'variant-filled-success'
					});
					return;
				}
				toastStore.trigger({
					message: 'Note not deleted',
					background: 'variant-filled-error'
				});
			}
		};

		modalStore.trigger(confirmDelete);
	};
</script>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<div class="flex items-center justify-between">
		<h2>Notes</h2>
		<a href="/new" class="btn variant-ghost-primary">New Note</a>
	</div>
	<div class="grid grid-cols-3 gap-4">
		{#each $noteStore as note}
			<div class="card p-4 flex flex-col gap-4 relative variant-ghost-warning">
				<button
					class="btn btn-icon-sm variant-filled-error absolute -top-1.5 -right-1.5"
					on:click={() => deleteNote(note.id)}>X</button
				>
				<p>{note.content}</p>
				<div class="flex flex-wrap gap-1">
					{#each note.tags as tag}
						<span class="badge variant-filled-secondary">{tag}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
