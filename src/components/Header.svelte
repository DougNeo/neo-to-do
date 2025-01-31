

<script lang="ts">
  import { selectedSection } from '$lib/stores';
</script>
<header class="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
  <h1 class="font-bold text-lg">Neo To-Do</h1>
  <div class="flex items-center gap-2">
    {#if $selectedSection}
      <span class="bg-purple-400 px-4 py-1 rounded-lg font-medium">
        {$selectedSection.name}
      </span>
    {:else}
      <div>👤 User</div>
    {/if}
  </div>
</header>
