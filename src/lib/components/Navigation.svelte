<script>
	import { page } from '$app/stores';
	import { drawerStore } from '@skeletonlabs/skeleton';

	const drawerClose = () => {
		drawerStore.close();
	};

	$: classesActive = (/** @type {string} */ href) =>
		href === $page.url.pathname ? '!bg-primary-500' : '';
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" class={classesActive('/')} on:click={drawerClose}>Notes</a></li>
		<li><a href="/new" class={classesActive('/new')} on:click={drawerClose}>New Entry</a></li>
		<li>
			<a href="/?test=2" class={classesActive('/?test=2')} on:click={drawerClose}>Other Page 2</a>
		</li>
		<li>
			<a href="/?test=3" class={classesActive('/?test=3')} on:click={drawerClose}>Other Page 3</a>
		</li>
	</ul>
</nav>
