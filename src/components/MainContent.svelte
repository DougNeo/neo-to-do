<!-- MainContent.svelte -->
<script lang="ts">
  import { selectedSection, sections } from '$lib/stores';

  let newTodo = "";
  $: if ($selectedSection) {
    const index = $sections.findIndex(s => s.name === $selectedSection.name);
    $sections[index] = $selectedSection;
  }

  function addTodo() {
    if (newTodo.trim() && $selectedSection) {
      $selectedSection.todos = [
        ...$selectedSection.todos,
        { id: Date.now(), title: newTodo.trim(), completed: false }
      ];
      newTodo = "";
    }
  }
</script>

<div class="flex-1 p-6">
  {#if $selectedSection}
    <div class="max-w-2xl mx-auto">
      <div class="flex gap-2 mb-6">
        <input
          type="text"
          bind:value={newTodo}
          placeholder="Novo todo..."
          class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          on:keypress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button
          on:click={addTodo}
          class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Adicionar
        </button>
      </div>

      <ul class="space-y-2">
        {#each $selectedSection.todos as todo (todo.id)}
          <li class="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm">
            <input
              type="checkbox"
              bind:checked={todo.completed}
              class="w-5 h-5"
            />
            <span class:line-through={todo.completed}>{todo.title}</span>
          </li>
        {/each}
      </ul>
    </div>
  {:else}
    <div class="text-center text-gray-500">
      Selecione uma seção para começar
    </div>
  {/if}
</div>