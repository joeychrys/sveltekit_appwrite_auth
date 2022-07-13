<script lang="ts">
	import { state } from '../store';
	import { goto } from '$app/navigation';

	let email = '',
		password = '';

	const login = async () => {
		if (!checkForm) {
			return;
		}
		try {
			await state.login(email, password);
			goto('/');
		} catch (error) {
			state.alert({ color: 'alert-warning', message: error.message });
		}
	};

	$: checkForm = email !== '' && password !== '';
</script>

<div class="card bg-base-300 text-base-content max-w-md h-fit w-full">
	<div class="card-body">
		<h1 class="text-3xl font-bold card-title">Sign In</h1>

		<form class="flex flex-col" on:submit|preventDefault={login}>
			<label class="block label" for="email">Email</label>
			<input id="email" class="input" type="email" bind:value={email} />

			<label class="block label" for="password">Password</label>
			<input id="password" class="input" type="password" bind:value={password} />

			<h1 class="mt-6">
				Don't have an account?
				<a href="/signup" class="link link-primary ">Sign up</a>
			</h1>

			<div class="mt-6">
				<button type="submit" class="btn btn-primary" disabled={!checkForm}>Login</button>
			</div>
		</form>
	</div>
</div>
