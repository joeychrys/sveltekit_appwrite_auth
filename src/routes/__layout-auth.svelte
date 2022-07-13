<script>
	import '../app.css';
	import Navbar from '../lib/Navbar.svelte';

	import { state } from '../store';
	import { onMount } from 'svelte';
	import { sdk } from '../appwrite';
	import { goto } from '$app/navigation';

	onMount(async () => {
		try {
			const account = await sdk.account.get();
			// @ts-ignore
			state.init(account);
		} catch (error) {
			state.init(null);
			goto('signin');
		}
	});
</script>

{#if $state.account}
	<main class="h-screen">
		<Navbar />
		<slot />
	</main>
{/if}
