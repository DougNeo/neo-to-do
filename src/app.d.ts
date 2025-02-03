// src/app.d.ts
/// <reference types="@sveltejs/kit" />

declare global {
	namespace App {
			// Tipagem para erros personalizados
			interface Error {
					code?: string;
					message: string;
					stack?: string;
			}

			// Tipagem para dados de contexto do servidor
			interface Locals {
					user?: {
							id: string;
							name: string;
					};
			}

			// Tipagem para dados de página
			interface PageData {
					sections?: Array<{
							name: string;
							todos: Array<{
									id: number;
									title: string;
									completed: boolean;
							}>;
					}>;
			}
	}
}

export {};
