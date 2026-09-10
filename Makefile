.DEFAULT_GOAL := help
.PHONY: help install dev build start test test-watch coverage lint format typecheck check clean

help: ## Lista os comandos disponiveis
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

install: ## Instala as dependencias (pnpm)
	pnpm install

dev: ## Sobe o servidor de desenvolvimento
	pnpm dev

build: ## Gera o build de producao
	pnpm build

start: ## Sobe o build de producao
	pnpm start

test: ## Roda os testes uma vez
	pnpm test

test-watch: ## Roda os testes em modo watch
	pnpm test:watch

coverage: ## Roda os testes com relatorio de cobertura
	pnpm test:coverage

lint: ## Roda o linter
	pnpm lint

format: ## Formata o codigo com Prettier
	pnpm format

typecheck: ## Checa os tipos com o TypeScript
	pnpm typecheck

check: lint typecheck test ## Roda lint, typecheck e testes

clean: ## Remove artefatos de build
	rm -rf .next coverage
