<script>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import {
		AppBar,
		AppShell,
		Avatar,
		Drawer,
		drawerStore,
		Toast,
		Modal
	} from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';

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

	const drawerClose = () => {
		drawerStore.close();
	};

	// $: classesSidebar = $page.url.pathname === '/' ? 'w-0' : 'w-0 lg:w-64'; //remove sidebar for homepage
	$: classesDrawerSidebarLeft = $drawerStore.meta === 'left' ? 'w-52 bg-surface-500/10' : 'hidden';
	$: classesDrawerSidebarRight =
		$drawerStore.meta === 'right' ? 'w-52 bg-surface-500/10' : 'hidden';
</script>

<Toast position="tr" />

<Modal width="w-1/3" />

<Drawer
	width="w-1/3"
	slotSidebarLeft={classesDrawerSidebarLeft}
	slotSidebarRight={classesDrawerSidebarRight}
>
	{#if $drawerStore.meta === 'left'}
		<h2 class="p-4">Navigation</h2>
		<hr />
		<Navigation />
	{/if}

	{#if $drawerStore.meta === 'right'}
		<button class="btn btn-sm" on:click={() => drawerClose()}> Close </button>
	{/if}
</Drawer>

<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10">
	<svelte:fragment slot="header">
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
				<Avatar initials="N" background="bg-primary-500" width="w-10" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- (footer) -->
</AppShell>
