## [1.0.7](https://github.com/docs-ts/docs-ts/compare/v1.0.6...v1.0.7) (2022-07-06)


### Bug Fixes

* remove the output directory after type checking ([f866987](https://github.com/docs-ts/docs-ts/commit/f866987c046375a75d00663dca7104184e9c69d1))

## [1.0.6](https://github.com/docs-ts/docs-ts/compare/v1.0.5...v1.0.6) (2022-07-06)


### Bug Fixes

* upgrade minimum io-ts version ([7564ee9](https://github.com/docs-ts/docs-ts/commit/7564ee961c306372e1ca452e2ac13a231cd558ee))
* use stable io-ts 2.1.3 ([f8d626e](https://github.com/docs-ts/docs-ts/commit/f8d626ec28d793b8f6f6bef38cd85b2b8ce2b9b8))

## [1.0.5](https://github.com/docs-ts/docs-ts/compare/v1.0.4...v1.0.5) (2022-07-06)


### Bug Fixes

* **deps:** update dependency glob to v8 ([c20d1b4](https://github.com/docs-ts/docs-ts/commit/c20d1b4e2c4383d365488bea690b315b5dc0d6e7))
* **deps:** update dependency ts-morph to v15 ([67b7436](https://github.com/docs-ts/docs-ts/commit/67b743640e43cc0891d7922c9e11b4c7820a9240))

## [1.0.4](https://github.com/docs-ts/docs-ts/compare/v1.0.3...v1.0.4) (2022-07-06)


### Bug Fixes

* **deps:** update dependency fs-extra to v10 ([6d8a81d](https://github.com/docs-ts/docs-ts/commit/6d8a81de69acd78c3bd8d7bcd0f732ce97f13206))

## [1.0.3](https://github.com/docs-ts/docs-ts/compare/v1.0.2...v1.0.3) (2022-07-06)


### Bug Fixes

* **deps:** update dependency rimraf to v3 ([61bed97](https://github.com/docs-ts/docs-ts/commit/61bed97c7f55069eaa9f3ddf2c51ec4cb351db89))

## [1.0.2](https://github.com/docs-ts/docs-ts/compare/v1.0.1...v1.0.2) (2022-07-06)


### Bug Fixes

* do not persist token after git checkout ([70e6d09](https://github.com/docs-ts/docs-ts/commit/70e6d097cb9011d0bd576534d5d7603dc41546fe)), closes [#3](https://github.com/docs-ts/docs-ts/issues/3) [/github.com/semantic-release/git/issues/196#issuecomment-601310576](https://github.com//github.com/semantic-release/git/issues/196/issues/issuecomment-601310576)

## [1.0.1](https://github.com/EricCrosson/docs-ts/compare/v1.0.0...v1.0.1) (2022-07-05)


### Bug Fixes

* re-release since 1.0.0 failed ([b06aba9](https://github.com/EricCrosson/docs-ts/commit/b06aba9d9d751bd1a7929a2732b351356d1b98b2))
* remove unused npm script ([f2eecda](https://github.com/EricCrosson/docs-ts/commit/f2eecdaf03c1d1e1ce411a4d7ad5584497726aee))

# 1.0.0 (2022-07-05)


### Bug Fixes

* assert.equal assert.strictEqual ([7a2a7a9](https://github.com/ericcrosson/docs-ts/commit/7a2a7a9cf272547ef5a33325d9f2ce0cc8829a03))
* **bin:** process.exit when an error occurs, print to stderr ([4127fba](https://github.com/ericcrosson/docs-ts/commit/4127fba54421215efd5d1b8e6d8f031a7e270430))
* **comments:** RegExp match examples ([1dfaac7](https://github.com/ericcrosson/docs-ts/commit/1dfaac72b8c97b4e49c075c4c0396e0c2afe0afa))
* **core:** overwrite on files that should not be overwritten ([d981e9d](https://github.com/ericcrosson/docs-ts/commit/d981e9d2f99b6130367bc33aaff877558a632e31))
* **lint:** Remove unnecessary type cast ([4b286cc](https://github.com/ericcrosson/docs-ts/commit/4b286cc16aa421c7c6bc439d6a440cafca60c293))
* **test:** Use ummutable implementation ([7c83962](https://github.com/ericcrosson/docs-ts/commit/7c839626d9980aad3e8020a40c72c6b31440d96f))


### Features

* **core:** Support any path in src in the examples ([7dd6f3a](https://github.com/ericcrosson/docs-ts/commit/7dd6f3aa48dd2fa3dbab8f6f835ac8e6726d5d90))
* print error as non coerced string ([98be43d](https://github.com/ericcrosson/docs-ts/commit/98be43d6784c4eebe18f516683d674c4daf5cd8b))

# Changelog

> **Tags:**
>
> - [New Feature]
> - [Bug Fix]
> - [Breaking Change]
> - [Documentation]
> - [Internal]
> - [Polish]
> - [Experimental]

**Note**: Gaps between patch versions are faulty/broken releases.
**Note**: A feature tagged as Experimental is in a high state of flux, you're at risk of it changing without notice.

# 0.6.10

- **Bug Fix**
  - fix `Parser` ignoring `@internal`/`@ignore`d methods on classes (@IMax153)

# 0.6.9

- **Polish**
  - print error as non coerced string, #28 (@waynevanson)

# 0.6.8

- **Polish**
  - modules no longer require examples when `enforceExamples` is true (@IMax153)

# 0.6.7

- **Bug Fix**
  - use `strict: true` in project configuration, fix #36 (@gcanti)

# 0.6.6

- **Bug Fix**
  - simplify `@example` import replacement, #35 (@thought2)

# 0.6.5

- **Polish**
  - allow double quotes in `@example` project imports, #31 (@thought2)

# 0.6.4

- **New Feature**
  - add `projectHomepage` configuration property, closes #26 (@IMax153)

# 0.6.3

- **Polish**
  - fix modules not respecting config settings #24 (@IMax153)
  - move `prettier` to `peerDependencies`, closes #22 (@gcanti)

# 0.6.2

- **Breaking Change**

  - refactor `Markdown` module (@IMax153)
    - add `Markdown` constructors (@IMax153)
    - add tagged union of `Printable` types (@IMax153)
    - add `fold` destructor for `Markdown` (@IMax153)
    - add `Semigroup`, `Monoid`, and `Show` instances for `Markdown` (@IMax153)
    - add `printModule` helper function (@IMax153)
  - update `Parser` module (@IMax153)
    - add `ParserEnv` which extends `Environment` (@IMax153)
    - add `Ast` interface (@IMax153)
  - update `Core` module (@IMax153)
    - add `Program` and `Environment` types (@IMax153)
    - update `Capabilities` interface (@IMax153)
    - remove `Eff`, `MonadFileSystem`, and `MonadLog` types (@IMax153)
    - remove `MonadFileSystem` and `MonadLog` instances (@IMax153)
  - rename `domain` module to `Module` (@IMax153)
    - rename all constructors to match their respective types (@IMax153)

- **New Feature**
  - add `Config` module (@IMax153)
    - support configuration through `docs-ts.json` file (@IMax153)
    - add `Config`, `ConfigBuilder` and `Settings` types (@IMax153)
    - add `build` constructor `ConfigBuilder` (@IMax153)
    - add `resolveSettings` destructor for creating `Settings` from a `ConfigBuilder` (@IMax153)
    - add combinators for manipulating a `ConfigBuilder` (@IMax153)
  - add `FileSystem` module (@IMax153)
    - add `FileSystem` instance (@IMax153)
    - add `File` constructor (@IMax153)
    - add `exists`, `readFile`, `remove`, `search`, and `writeFile` helper functions (@IMax153)
  - add `Logger` module (@IMax153)
    - add `LogEntry`, `LogLevel`, and `Logger` types (@IMax153)
    - add `showEntry` and `Logger` instances (@IMax153)
    - add `debug`, `error`, and `info` helper functions (@IMax153)
  - Add `Example` module (@IMax153)
    - add `run` helper function (@IMax153)

# 0.5.3

- **Polish**
  - add support for TypeScript `4.x`, closes #19 (@gcanti)

# 0.5.2

- **Polish**
  - use ts-node.cmd on windows, #15 (@mattiamanzati)

# 0.5.1

- **Bug Fix**
  - should not return ignore function declarations (@gcanti)
  - should not return internal function declarations (@gcanti)
  - should output the class name when there's an error in a property (@gcanti)

# 0.5.0

- **Breaking Change**
  - total refactoring (@gcanti)

# 0.4.0

- **Breaking Change**
  - the signature snippets are not valid TS (@gcanti)
  - add support for class properties (@gcanti)

# 0.3.5

- **Polish**
  - support any path in `src` in the examples, #12 (@gillchristian)

# 0.3.4

- **Polish**
  - remove `code` from headers (@gcanti)

# 0.3.3

- **Polish**
  - remove useless postfix (@gcanti)

# 0.3.1

- **Bug Fix**
  - add support for default type parameters (@gcanti)

# 0.3.0

- **Breaking Change**
  - modules now can/must be documented as usual (@gcanti)
    - required `@since` tag
    - no more `@file` tags (descriptione can be specified as usual)

# 0.2.1

- **Internal**
  - run `npm audit fix` (@gcanti)

# 0.2.0

- **Breaking Change**
  - replace `ts-simple-ast` with `ts-morph` (@gcanti)
  - make `@since` tag mandatory (@gcanti)
- **New Feature**
  - add support for `ExportDeclaration`s (@gcanti)

# 0.1.0

upgrade to `fp-ts@2.0.0-rc.7` (@gcanti)

- **Bug Fix**
  - fix static methods heading (@gcanti)

# 0.0.3

upgrade to `fp-ts@1.18.x` (@gcanti)

# 0.0.2

- **Bug Fix**
  - fix Windows Path Handling (@rzeigler)

# 0.0.1

Initial release
