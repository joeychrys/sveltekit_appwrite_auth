<script>
	import { state } from '../store';
</script>

{#if $state.alert}
	<div class="alert alert-error shadow-lg w-full max-w-md">
		<div>
			<svg
				on:click={() => state.alert(null)}
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current flex-shrink-0 h-6 w-6 cursor-pointer"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>Error! {$state.alert.message}</span>
		</div>
	</div>
{/if}
