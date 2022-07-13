<script>
	import { state } from '../store';
	import { goto } from '$app/navigation';

	let email = '',
		password = '',
		name = '';

	const signup = async () => {
		if (!checkForm) {
			return;
		}
		try {
			await state.signup(email, password, name);
			await state.login(email, password);
			goto('/');
		} catch (error) {
			console.log(error);
		}
	};

	$: checkForm = name != '' && email !== '' && password !== '';
</script>

<div class="card bg-base-300 text-base-content w-96 h-fit">
	<div class="card-body">
		<h1 class="text-3xl font-bold card-title">Sign up</h1>

		<form class="flex flex-col" on:submit|preventDefault={signup}>
			<label class="block label" for="name">Name</label>
			<input id="name" class="input" type="text" bind:value={name} />

			<label class="block label" for="email">Email</label>
			<input id="email" class="input" type="email" bind:value={email} />

			<label class="block label" for="password">Password</label>
			<input id="password" class="input" type="password" bind:value={password} />

			<div class="mt-6">
				<button type="submit" class="btn btn-primary" disabled={!checkForm}>Continue</button>
			</div>
		</form>
	</div>
</div>
