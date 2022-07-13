<script>
	import { state } from '../store';

	// @ts-ignore
	let currentUser = $state.account.name;
</script>

<section class="container flex justify-center mx-auto h-1/2 place-items-end p-6">
	<div class="text-base-content card bg-base-300 w-96 h-fit">
		<div class="mockup-code">
			<pre data-prefix="$"><code>login user</code></pre>
			<pre data-prefix=">" class="text-warning"><code>fetching api..</code></pre>
			<pre data-prefix=">" class="text-success"><code>Welcome {currentUser}!</code></pre>
		</div>
	</div>
</section>
