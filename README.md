# Op-Op: Open One Piece TCG Simulator

This project aims to be an open TCG engine simulator for the One Piece TCG, implementing game rules and a usable (and pretty) interface. Multiplayer, security against cheaters, ranking and other common features of online games may be implemented in the future, but that's not a promise.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## TODO (urgent)

- Fix battle damage calculation
- Create targetting system with filters and callbacks
   - A function wishing to ask for a target will call this service passing any filters and a callback that shall receive
   the result of the targeting
   - Filters: card type, card archtype, card cost, card power, card quantity, card color, card name, card location, card status (tapped/untapped)
- UI tweaks:
   - Move phase buttons to side panel [X]
   - Add card inspector to side panel [X]
   - Infinite scroll on log
   - Display card power on character area
   - Fix flipping on main deck [X]
   - Fix flipping on leader [X]

## Learning/search

- Reflections to call card classes based on strings.
- SFX formats and libs.
- Multiplayer online
   - Websocket/HTTP
   - Security (less client stored information)
   - Persistence
   - ELO system
   - Report system