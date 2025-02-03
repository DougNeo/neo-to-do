<script lang="ts">
	import { onMount } from 'svelte';
	import { selectedSection } from '$lib/stores';

	type Todo = {
		id: number;
		title: string;
		completed: boolean;
	};

	type Section = {
		name: string;
		todos: Todo[];
	};

	let sections: Section[] = [];

	let newSection = '';

	const isBrowser = typeof window !== 'undefined';

	onMount(() => {
		if (!isBrowser) return;
		const storedSections = localStorage.getItem('sidebarSections');
		if (storedSections) {
			sections = JSON.parse(storedSections);
		}
	});

	$: if (isBrowser) {
		localStorage.setItem('sidebarSections', JSON.stringify(sections));
	}

	function addSection() {
		if (newSection.trim()) {
			sections = [...sections, { name: newSection.trim(), todos: [] }];
			newSection = '';
		}
	}

	function removeSection(index: number) {
		sections = sections.filter((_, i) => i !== index);
	}
</script>

<div class="space-y-4 bg-gray-200 p-4">
	<div class="flex gap-2">
		<input
			type="text"
			bind:value={newSection}
			placeholder="Nova seção..."
			class="flex-1 rounded-lg border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
			on:keypress={(e) => e.key === 'Enter' && addSection()}
		/>
		<button
			on:click={addSection}
			class="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
		>
			Adicionar
		</button>
	</div>

	<ul class="space-y-2">
		{#each sections as section, index}
			<li
				role="button"
				tabindex="0"
				on:click={() => selectedSection.set(section)}
				class="flex cursor-pointer items-center justify-between rounded-lg border bg-gray-50 px-4 py-2 hover:bg-purple-100"
			>
				<span>{section.name}</span>
				<button on:click={() => removeSection(index)} class="text-red-500 hover:text-red-700"
					>Excluir</button
				>
			</li>
		{/each}
	</ul>
</div>
