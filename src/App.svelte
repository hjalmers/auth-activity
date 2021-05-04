<script lang="ts">
	import AuthActivityTable from "./AuthActivityTable.svelte";
	import AuthActivity from "./AuthActivity.svelte";
	import {formatDate} from './utilities/date';
	import type {Activity} from './interfaces/activity.interface';

	export let apiPath = 'https://private-b39b24-authactivity.apiary-mock.com';
	export let mobileBreakpoint = 768;

	let width = 0;
	const today = new Date(new Date().toDateString()).getTime();
	const yesterday = new Date(today);
	yesterday.setDate(yesterday.getDate() - 1)

	async function getActivities() {
		const res = await fetch(`${apiPath}/activity`);
		const json = await res.json();

		if (res.ok) {
			return {
				days: Object.entries(json.reduce((previousValue, currentValue) => {
					const day = new Date(new Date(currentValue.date).toDateString()).getTime();
					return {...previousValue, [day]: [...(previousValue[day] || []), currentValue]};
					}, {})) as Array<Activity>,
				all: json as Array<Activity>
			};
		} else {
			throw new Error(json);
		}
	}

	let promise = getActivities();

	function getDay(date: number): string {
		if (+date === today) {
			return 'Today';
		} else if (+date === yesterday.getTime()) {
			return 'Yesterday'
		} else {
			return formatDate(date, 'D MMMM YYYY');
		}
	}
	$: data = promise;

</script>

<main bind:clientWidth={width}>
	<h2>Activities</h2>
	{#await data}
		<div class="skeleton-loader"><span class="sr-only">...loading</span></div>
	{:then data}
		{#if width < mobileBreakpoint}
			{#each data.days as [day, activities]}
				<h5 class="font-weight-normal">{getDay(day)}</h5>
				{#each activities as activity}
					<AuthActivity activity={activity}/>
				{/each}
			{/each}
		{:else}
			<AuthActivityTable activities={data.all}></AuthActivityTable>
		{/if}

	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</main>

