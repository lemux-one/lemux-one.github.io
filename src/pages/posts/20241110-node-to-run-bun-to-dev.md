---
layout: ../../layouts/MdPostLayout.astro
title: "Node to run, Bun to dev..."
description: "I have to use NodeJS as my runtime, but Bun can still make my DX smoother..."
image:
  url: "/20241110-runtime-node-dx-bun.webp"
  alt: "Hero image showing NodeJS and Bun as two complementary paths in JavaScript development, with NodeJS labeled 'runtime only' and Bun illustrated as a complete development workflow including bundling, TypeScript support, and testing tools."
pubDate: 2024-11-10
tags: ["node", "bun", "typescript", "web"]
---

In a previous article, I decided to use Node for my next JavaScript-powered web app (go to that article to check my rationale about it), yet there are still several challenges in the overall developer experience (DX) when using traditional Node-oriented development tools and methodologies.

My first pain point is the lack of built-in TypeScript support since I actually enjoy type safety a lot, and how much the tooling can help me better when typing is not a constant miss and guess. In this regard, Bun provides a better DX, eliminating the need for several external packages just to use TypeScript effectively.

My second pain point is the lack of a built-in bundling mechanism for Node. I really like the idea of bundling my entire app in a way that deployment is just a matter of copying a folder and run it. This saves me the extra step (no need for `npm install`) and will save me money by keeping my storage usage to a minimum on my hosting. Bun provides again!

The third pain point is that I appreciate a 'batteries-included' mindset for the platforms instead of constantly relying on third party solutions. Bun also provides a nicer integrated set of built-in features that I love. However, I am not able to use Bun's runtime so I need to rely on Node's built-in for this and fill in the gaps myself.

I know that last point may be a bit picky, but I enjoy refining my setup, and, ultimately, that’s what matters most to keep this developer happy 😁.

As an example, this is my current package.json file:

```json
{
  "name": "jsxr-poc",
  "version": "0.1",
  "scripts": {
    "dev": "bun --hot run --inspect src/index.tsx",
    "clean": "rm -rf dist",
    "test": "bun test",
    "check": "tsc --noEmit",
    "bundle": "NODE_ENV=production bun build src/index.tsx --outfile ./dist/app.mjs --target node",
    "dist": "bun clean && bun check && bun test && bun bundle && cp -R src/static dist",
    "preview": "bun dist && cd dist && node app.mjs"
  },
  "devDependencies": {
    "@types/bun": "^1.1.12"
  }
}
```

Where I only depend on the types and everything else is solved by taking advantage of Bun's niceties and a couple of shell commands go a long way here.

My tsconfig.json also allows me to use my own code like third-party modules which I find very appealing:

```json
{
  "compilerOptions": {
    "skipLibCheck": true,
    "strict": true,
    "baseUrl": "./src/modules",
    "paths": {
      "jsxr": ["jsxr"],
      "ssr": ["ssr"],
      "httpw": ["httpw"]
    },
    "jsx": "react-jsx",
    "jsxImportSource": "jsxr"
  }
}
```

That last statement is not a point for Bun explicitly but it still supports it so I don't need to use TSC for anything else than just type checking my code.

I really appreciate when a simple setup is powerful without requiring numerous third-party modules. There is beauty in simplicity.
