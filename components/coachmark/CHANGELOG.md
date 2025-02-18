# Change Log

## 7.3.0

### Minor Changes

- [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)! - Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/actionbutton@6.2.0
  - @spectrum-css/buttongroup@7.2.0
  - @spectrum-css/actionmenu@6.2.0
  - @spectrum-css/popover@7.2.0
  - @spectrum-css/button@13.5.0
  - @spectrum-css/menu@7.2.0

## 7.2.0

### Minor Changes

- [#3292](https://github.com/adobe/spectrum-css/pull/3292) [`f35a58e`](https://github.com/adobe/spectrum-css/commit/f35a58e9bdf5599f7971e88831df44460657b860) Thanks [@castastrophe](https://github.com/castastrophe)! - Update coach mark pagination to add `font-family`, using the existing custom property. Update the `font-weight` and `line-height` to reference the correct tokens.

## 7.1.3

### Patch Changes

- [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)! - Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/actionbutton@6.1.3
  - @spectrum-css/buttongroup@7.1.3
  - @spectrum-css/actionmenu@6.1.3
  - @spectrum-css/popover@7.1.6
  - @spectrum-css/button@13.1.3
  - @spectrum-css/menu@7.1.7

## 7.1.2

### Patch Changes

- [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)! - Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/actionbutton@6.1.2
  - @spectrum-css/buttongroup@7.1.2
  - @spectrum-css/actionmenu@6.1.2
  - @spectrum-css/popover@7.1.5
  - @spectrum-css/button@13.1.2
  - @spectrum-css/menu@7.1.6

## 7.1.1

### Patch Changes

- [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)! - Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/actionbutton@6.1.1
  - @spectrum-css/buttongroup@7.1.1
  - @spectrum-css/actionmenu@6.1.1
  - @spectrum-css/popover@7.1.2
  - @spectrum-css/button@13.1.1
  - @spectrum-css/menu@7.1.2

## 7.1.0

### Minor Changes

- [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/actionbutton@>=6
  - @spectrum-css/actionmenu@>=6
  - @spectrum-css/button@>=13
  - @spectrum-css/buttongroup@>=7
  - @spectrum-css/menu@>=7
  - @spectrum-css/popover@>=8
  - @spectrum-css/tokens@>=14

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="7.0.0"></a>

## 7.0.0

🗓
2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@6.1.5...@spectrum-css/coachmark@7.0.0)

\*feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

    	###
    	🛑 BREAKING CHANGES

    		*
    		- Removes component-builder & component-builder-simple for script leveraging postcss

- Imports added to index.css and themes/express.css

<a name="6.1.5"></a>

## 6.1.5

🗓
2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@6.1.4...@spectrum-css/coachmark@6.1.5)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="6.1.4"></a>

## 6.1.4

🗓
2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@6.1.3...@spectrum-css/coachmark@6.1.4)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="6.1.3"></a>

## 6.1.3

🗓
2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@6.1.2...@spectrum-css/coachmark@6.1.3)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="6.1.2"></a>

## 6.1.2

🗓
2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@6.1.1...@spectrum-css/coachmark@6.1.2)

### 🐛 Bug fixes

- **coachmark:**update font family tokens ([#2478](https://github.com/adobe/spectrum-css/issues/2478))([0a3a946](https://github.com/adobe/spectrum-css/commit/0a3a946))

<a name="6.1.1"></a>

## 6.1.1

🗓
2024-02-06

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="6.1.0"></a>

## 6.1.0

🗓
2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@6.0.1...@spectrum-css/coachmark@6.1.0)

### ✨ Features

\*remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

<a name="6.0.1"></a>

## 6.0.1

🗓
2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@6.0.0...@spectrum-css/coachmark@6.0.1)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="6.0.0"></a>

## 6.0.0

🗓
2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.75...@spectrum-css/coachmark@6.0.0)

### ✨ Features

- **coachmark:**migrate to spectrum-tokens([5e5862f](https://github.com/adobe/spectrum-css/commit/5e5862f))

      ###
      🛑 BREAKING CHANGES

      	*
      	**coachmark:** migrates Coach Mark to `@adobe/spectrum-tokens`

<a name="5.0.75"></a>

## 5.0.75

🗓
2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.73...@spectrum-css/coachmark@5.0.75)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.74"></a>

## 5.0.74

🗓
2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.73...@spectrum-css/coachmark@5.0.74)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.73"></a>

## 5.0.73

🗓
2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.72...@spectrum-css/coachmark@5.0.73)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.72"></a>

## 5.0.72

🗓
2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.71...@spectrum-css/coachmark@5.0.72)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.71"></a>

## 5.0.71

🗓
2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.70...@spectrum-css/coachmark@5.0.71)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.70"></a>

## 5.0.70

🗓
2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.69...@spectrum-css/coachmark@5.0.70)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.69"></a>

## 5.0.69

🗓
2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.68...@spectrum-css/coachmark@5.0.69)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.68"></a>

## 5.0.68

🗓
2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.67...@spectrum-css/coachmark@5.0.68)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.67"></a>

## 5.0.67

🗓
2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.66...@spectrum-css/coachmark@5.0.67)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.66"></a>

## 5.0.66

🗓
2023-09-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.65...@spectrum-css/coachmark@5.0.66)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.65"></a>

## 5.0.65

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.64...@spectrum-css/coachmark@5.0.65)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.64"></a>

## 5.0.64

🗓
2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.63...@spectrum-css/coachmark@5.0.64)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.63"></a>

## 5.0.63

🗓
2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.62...@spectrum-css/coachmark@5.0.63)

### 🔙 Reverts

\*gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

<a name="5.0.62"></a>

## 5.0.62

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.61...@spectrum-css/coachmark@5.0.62)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.61"></a>

## 5.0.61

🗓
2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.59...@spectrum-css/coachmark@5.0.61)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.60"></a>

## 5.0.60

🗓
2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.59...@spectrum-css/coachmark@5.0.60)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.59"></a>

## 5.0.59

🗓
2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.58...@spectrum-css/coachmark@5.0.59)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.58"></a>

## 5.0.58

🗓
2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.57...@spectrum-css/coachmark@5.0.58)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.57"></a>

## 5.0.57

🗓
2023-08-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.56...@spectrum-css/coachmark@5.0.57)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.56"></a>

## 5.0.56

🗓
2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.55...@spectrum-css/coachmark@5.0.56)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.55"></a>

## 5.0.55

🗓
2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.54...@spectrum-css/coachmark@5.0.55)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.54"></a>

## 5.0.54

🗓
2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.53...@spectrum-css/coachmark@5.0.54)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.53"></a>

## 5.0.53

🗓
2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.52...@spectrum-css/coachmark@5.0.53)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.52"></a>

## 5.0.52

🗓
2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.51...@spectrum-css/coachmark@5.0.52)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.51"></a>

## 5.0.51

🗓
2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.50...@spectrum-css/coachmark@5.0.51)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.50"></a>

## 5.0.50

🗓
2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.49...@spectrum-css/coachmark@5.0.50)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.49"></a>

## 5.0.49

🗓
2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.48...@spectrum-css/coachmark@5.0.49)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.48"></a>

## 5.0.48

🗓
2023-06-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.47...@spectrum-css/coachmark@5.0.48)

### 🐛 Bug fixes

\*restore files to pre-formatted state([491dbcb](https://github.com/adobe/spectrum-css/commit/491dbcb))

<a name="5.0.47"></a>

## 5.0.47

🗓
2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.46...@spectrum-css/coachmark@5.0.47)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.46"></a>

## 5.0.46

🗓
2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.45...@spectrum-css/coachmark@5.0.46)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.45"></a>

## 5.0.45

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.44...@spectrum-css/coachmark@5.0.45)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.44"></a>

## 5.0.44

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.43...@spectrum-css/coachmark@5.0.44)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.43"></a>

## 5.0.43

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.42...@spectrum-css/coachmark@5.0.43)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.42"></a>

## 5.0.42

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.41...@spectrum-css/coachmark@5.0.42)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.41"></a>

## 5.0.41

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.40...@spectrum-css/coachmark@5.0.41)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.40"></a>

## 5.0.40

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.39...@spectrum-css/coachmark@5.0.40)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.39"></a>

## 5.0.39

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.38...@spectrum-css/coachmark@5.0.39)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.38"></a>

## 5.0.38

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.37...@spectrum-css/coachmark@5.0.38)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.37"></a>

## 5.0.37

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.36...@spectrum-css/coachmark@5.0.37)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.36"></a>

## 5.0.36

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.35...@spectrum-css/coachmark@5.0.36)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.35"></a>

## 5.0.35

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.34...@spectrum-css/coachmark@5.0.35)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.34"></a>

## 5.0.34

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.32...@spectrum-css/coachmark@5.0.34)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.33"></a>

## 5.0.33

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.32...@spectrum-css/coachmark@5.0.33)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.32"></a>

## 5.0.32

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.31...@spectrum-css/coachmark@5.0.32)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.31"></a>

## 5.0.31

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.30...@spectrum-css/coachmark@5.0.31)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.30"></a>

## 5.0.30

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.29...@spectrum-css/coachmark@5.0.30)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.29"></a>

## 5.0.29

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.28...@spectrum-css/coachmark@5.0.29)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.28"></a>

## 5.0.28

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.26...@spectrum-css/coachmark@5.0.28)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.27"></a>

## 5.0.27

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.26...@spectrum-css/coachmark@5.0.27)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.26"></a>

## 5.0.26

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.25...@spectrum-css/coachmark@5.0.26)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.25"></a>

## 5.0.25

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.24...@spectrum-css/coachmark@5.0.25)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.24"></a>

## 5.0.24

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.23...@spectrum-css/coachmark@5.0.24)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.23"></a>

## 5.0.23

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.22...@spectrum-css/coachmark@5.0.23)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.22"></a>

## 5.0.22

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.21...@spectrum-css/coachmark@5.0.22)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.21"></a>

## 5.0.21

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.20...@spectrum-css/coachmark@5.0.21)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.20"></a>

## 5.0.20

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.19...@spectrum-css/coachmark@5.0.20)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.19"></a>

## 5.0.19

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.17...@spectrum-css/coachmark@5.0.19)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.18"></a>

## 5.0.18

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.17...@spectrum-css/coachmark@5.0.18)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.17"></a>

## 5.0.17

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.16...@spectrum-css/coachmark@5.0.17)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.16"></a>

## 5.0.16

🗓 2022-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.14...@spectrum-css/coachmark@5.0.16)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.15"></a>

## 5.0.15

🗓 2022-12-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.14...@spectrum-css/coachmark@5.0.15)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.14"></a>

## 5.0.14

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.13...@spectrum-css/coachmark@5.0.14)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.13"></a>

## 5.0.13

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.12...@spectrum-css/coachmark@5.0.13)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.12"></a>

## 5.0.12

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.11...@spectrum-css/coachmark@5.0.12)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.11"></a>

## 5.0.11

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.10...@spectrum-css/coachmark@5.0.11)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.10"></a>

## 5.0.10

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.9...@spectrum-css/coachmark@5.0.10)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.9"></a>

## 5.0.9

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.8...@spectrum-css/coachmark@5.0.9)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.8"></a>

## 5.0.8

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.7...@spectrum-css/coachmark@5.0.8)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.7"></a>

## 5.0.7

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.6...@spectrum-css/coachmark@5.0.7)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.6"></a>

## 5.0.6

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.5...@spectrum-css/coachmark@5.0.6)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.5"></a>

## 5.0.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.4...@spectrum-css/coachmark@5.0.5)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.4"></a>

## 5.0.4

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.3...@spectrum-css/coachmark@5.0.4)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.3"></a>

## 5.0.3

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.2...@spectrum-css/coachmark@5.0.3)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.2"></a>

## 5.0.2

🗓 2022-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.1...@spectrum-css/coachmark@5.0.2)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.1"></a>

## 5.0.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@5.0.0...@spectrum-css/coachmark@5.0.1)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="5.0.0"></a>

## 5.0.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.10...@spectrum-css/coachmark@5.0.0)

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

### 📚 Documentation

- use new Button markup ([886b2cb](https://github.com/adobe/spectrum-css/commit/886b2cb))

### 🛑 BREAKING CHANGES

- Button markup has changed

<a name="4.0.0"></a>

## 4.0.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@4.0.0-beta.0...@spectrum-css/coachmark@4.0.0)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="4.0.0-beta.0"></a>

## 4.0.0-beta.0

🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.10...@spectrum-css/coachmark@4.0.0-beta.0)

### 📚 Documentation

- use new Button markup ([629bf05](https://github.com/adobe/spectrum-css/commit/629bf05))

### 🛑 BREAKING CHANGES

- Button markup has changed

<a name="3.0.10"></a>

## 3.0.10

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.9...@spectrum-css/coachmark@3.0.10)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.9"></a>

## 3.0.9

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.8...@spectrum-css/coachmark@3.0.9)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.8"></a>

## 3.0.8

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.7...@spectrum-css/coachmark@3.0.8)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.7"></a>

## 3.0.7

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.6...@spectrum-css/coachmark@3.0.7)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.6"></a>

## 3.0.6

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.4...@spectrum-css/coachmark@3.0.6)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.5"></a>

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.4...@spectrum-css/coachmark@3.0.5)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.3"></a>

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.3-alpha.3...@spectrum-css/coachmark@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

<a name="3.0.3-alpha.3"></a>

## 3.0.3-alpha.3

🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.3-alpha.2...@spectrum-css/coachmark@3.0.3-alpha.3)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.3-alpha.2"></a>

## 3.0.3-alpha.2

🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.3-alpha.1...@spectrum-css/coachmark@3.0.3-alpha.2)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.3-alpha.1"></a>

## 3.0.3-alpha.1

🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.3-alpha.0...@spectrum-css/coachmark@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.3-alpha.0"></a>

## 3.0.3-alpha.0

🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.2...@spectrum-css/coachmark@3.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.2"></a>

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.1...@spectrum-css/coachmark@3.0.2)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.1"></a>

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.0...@spectrum-css/coachmark@3.0.1)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.0"></a>

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.0-beta.6...@spectrum-css/coachmark@3.0.0)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.0-beta.6"></a>

## 3.0.0-beta.6

🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.0-beta.5...@spectrum-css/coachmark@3.0.0-beta.6)

### 🐛 Bug fixes

- update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))
- use new Button markup ([502a1b0](https://github.com/adobe/spectrum-css/commit/502a1b0))

### 🛑 BREAKING CHANGES

- markup has changed and now requires new Button markup (.spectrum-Button--sizeM)

<a name="3.0.0-beta.5"></a>

## 3.0.0-beta.5

🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.0-beta.4...@spectrum-css/coachmark@3.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.0-beta.4"></a>

## 3.0.0-beta.4

🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.0-beta.3...@spectrum-css/coachmark@3.0.0-beta.4)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.0-beta.3"></a>

## 3.0.0-beta.3

🗓 2020-06-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.0-beta.2...@spectrum-css/coachmark@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.0-beta.2"></a>

## 3.0.0-beta.2

🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.0-beta.1...@spectrum-css/coachmark@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.0-beta.1"></a>

## 3.0.0-beta.1

🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@3.0.0-beta.0...@spectrum-css/coachmark@3.0.0-beta.1)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="3.0.0-beta.0"></a>

## 3.0.0-beta.0

🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@2.0.5...@spectrum-css/coachmark@3.0.0-beta.0)

### ✨ Features

- make Coach Mark support RTL ([f4c9c59](https://github.com/adobe/spectrum-css/commit/f4c9c59))

<a name="2.0.5"></a>

## 2.0.5

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@2.0.4...@spectrum-css/coachmark@2.0.5)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="2.0.4"></a>

## 2.0.4

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@2.0.3...@spectrum-css/coachmark@2.0.4)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="2.0.3"></a>

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@2.0.2...@spectrum-css/coachmark@2.0.3)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="2.0.2"></a>

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@2.0.1...@spectrum-css/coachmark@2.0.2)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="2.0.1"></a>

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/coachmark@2.0.0...@spectrum-css/coachmark@2.0.1)

**Note:** Version bump only for package @spectrum-css/coachmark

<a name="2.0.0"></a>

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
