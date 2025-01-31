// src/lib/stores.ts
import { writable } from 'svelte/store';

type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

type Section = {
    name: string;
    todos: Todo[];
};

export const sections = writable<Section[]>([]);
export const selectedSection = writable<Section | null>(null);
