<script>
	import { AppBar, Avatar, LightSwitch, drawerStore } from '@skeletonlabs/skeleton';

	/**
	 * Open the drawer
	 * @param {"left" | "right"} position - The position of the drawer
	 * @returns {void}
	 *
	 */
	const drawerOpen = (position = 'left') => {
		drawerStore.open({
			position: position,
			meta: position
		});
	};
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<button class="md:hidden btn btn-sm mr-4" on:click={() => drawerOpen('left')}>
			<svg
				class="w-6 h-6 text-primary-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
		<strong class="text-xl uppercase">Notes</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch rounded="rounded-full" />

		<Avatar initials="N" background="bg-primary-500" width="w-10" />
	</svelte:fragment>
</AppBar>
