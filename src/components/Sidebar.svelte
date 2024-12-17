<script lang="ts">
  import { onMount } from "svelte";

  // Tipagem para os itens da Sidebar
  type Section = string;

  // Lista de seções inicial (caso o localStorage esteja vazio)
  let sections: Section[] = [];

  // Novo item a ser adicionado
  let newSection = "";

  // Função utilitária para verificar se estamos no navegador
  const isBrowser = typeof window !== "undefined";

  // Carregar itens do localStorage ao montar o componente
  onMount(() => {
    if (!isBrowser) return;
    const storedSections = localStorage.getItem("sidebarSections");
    if (storedSections) {
      sections = JSON.parse(storedSections);
    }
  });

  $: if (isBrowser) {
    localStorage.setItem("sidebarSections", JSON.stringify(sections));
  }

  // Adicionar nova seção
  function addSection() {
    if (newSection.trim()) {
      sections = [...sections, newSection.trim()];
      newSection = ""; // Limpar o campo de entrada
    }
  }

  // Remover uma seção pelo índice
  function removeSection(index: number) {
    sections = sections.filter((_, i) => i !== index);
  }
</script>

<div class="p-4 space-y-4">
  <!-- Campo de Entrada para Nova Seção -->
  <div class="flex gap-2">
    <input
      type="text"
      bind:value={newSection}
      placeholder="Nova seção..."
      class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
    />
    <button
      on:click={addSection}
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      Adicionar
    </button>
  </div>

  <!-- Lista de Seções -->
  <ul class="space-y-2">
    {#each sections as section, index}
      <li class="flex items-center justify-between px-4 py-2 bg-gray-50 border rounded-lg">
        <span>{section}</span>
        <button
          on:click={() => removeSection(index)}
          class="text-red-500 hover:text-red-700"
        >
          Excluir
        </button>
      </li>
    {/each}
  </ul>
</div>
