<script lang="ts">
  import Header from '../components/Header.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import MainContent from '../components/MainContent.svelte';
</script>

<div class="flex flex-col h-screen">
  <Header />
  <div class="flex flex-1 overflow-hidden">
    <Sidebar class="w-64 bg-gray-100 border-r" />
    <MainContent class="flex-1 bg-white p-4" />
  </div>
</div>