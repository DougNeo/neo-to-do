<script lang="ts">
  type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };

  let todos: Todo[] = [
    { id: 1, title: "Learn Svelte", completed: false },
    { id: 2, title: "Build a To-Do App", completed: false },
    { id: 3, title: "Share with the world", completed: true }
  ];
</script>

<ul class="space-y-2" {...$$props}>
  {#each todos as { id, title, completed }}
    <li class="flex items-center justify-between px-4 py-2 bg-gray-50 border rounded-lg">
      <span class={completed ? 'line-through text-gray-400' : ''}>{title}</span>
      <input
        type="checkbox"
        bind:checked={completed}
        class="form-checkbox h-5 w-5 text-blue-600"
      />
    </li>
  {/each}
</ul>
