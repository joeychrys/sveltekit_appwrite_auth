<script>
	import { goto } from '$app/navigation';
	import { state } from '../store';

	const logout = async () => {
		try {
			await state.logout();
			goto('/signin');
		} catch (error) {
			state.init(null);
		}
	};
</script>

<nav class="navbar bg-inherit text-neutral-content">
	<div class="flex-1">
		<button class="text-xl btn btn-ghost">JA</button>
	</div>
	<ul class="p-2 bg-inherit menu menu-horizontal">
		<li>
			<button on:click={logout} class="btn btn-primary text-primary-content">Logout</button>
		</li>
	</ul>
</nav>
