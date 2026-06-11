# MCP Playground 🚀

A dedicated sandbox and learning environment for experimenting with the **Model Context Protocol (MCP)**, alongside repository practice.

---

## 🎯 Purpose

The primary goal of this repository is to learn, develop, and test integrations using the **Model Context Protocol (MCP)**. It serves as a playground to:
- Understand how to build custom MCP servers and clients.
- Define, register, and invoke tools/resources using the `@modelcontextprotocol/sdk`.
- Experiment with schema definitions (using `zod`) to shape parameters and payloads for LLMs.
- Practice advanced Git workflows (such as rebasing, merging, and branch management).

---

## 📂 Repository Structure

- **[01-start/](file:///c:/Users/alexander.zapata/Documents/Personal%20Projects/mcp-playground/01-start/)**: The starting point for an MCP server build.
  - [main.ts](file:///c:/Users/alexander.zapata/Documents/Personal%20Projects/mcp-playground/01-start/main.ts): Configures an `McpServer` and defines dynamic tools (like a weather fetching tool).
  - [package.json](file:///c:/Users/alexander.zapata/Documents/Personal%20Projects/mcp-playground/01-start/package.json): Local environment configuration.
- **[rebase_practice.txt](file:///c:/Users/alexander.zapata/Documents/Personal%20Projects/mcp-playground/rebase_practice.txt)**: Notes and steps for practicing Git rebase operations.
- **[package.json](file:///c:/Users/alexander.zapata/Documents/Personal%20Projects/mcp-playground/package.json)**: Main package file containing the core `@modelcontextprotocol/sdk` and `zod` dependencies.

---

## 🛠️ Stack & Dependencies

- **Runtime**: [Node.js](https://nodejs.org/) & [pnpm](https://pnpm.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Core Library**: `@modelcontextprotocol/sdk` (Model Context Protocol SDK)
- **Validation**: `zod` for strong runtime schema enforcement
