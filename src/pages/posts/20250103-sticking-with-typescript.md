---
layout: ../../layouts/MdPostLayout.astro
title: "Why I’m Sticking with Typescript (Even if Big Players Aren’t)"
description: "Despite shifting trends, Typescript remains my go-to for its type safety, developer experience, and flexibility."
image:
  url: "/20250103-sticking-with-typescript.jpg"
  alt: "Illustration of a programming workspace featuring a laptop with TypeScript code on the screen, surrounded by books, a coffee cup, pens, and sticky notes, representing a developer's organized and creative environment."
pubDate: 2025-01-03
tags: ["web", "typescript", "javascript"]
---

In recent months, there’s been growing chatter about certain tech giants moving away from Typescript in favor of alternatives. Some have cited its strictness as a barrier to agility, while others argue for the simplicity of sticking to plain JavaScript. These developments, while noteworthy, haven’t shaken my confidence in Typescript—in fact, they’ve only reinforced why it remains my go-to language. As long as it is well maintained, I believe Typescript significantly enhances developer experience (DX). Once you get past the initial learning curve—understanding types like "any," "unknown," "never," and utility types like "Partial" and "Omit"—it transforms how you write and maintain code. These tools not only make the codebase more robust but also reduce the cognitive load during development by clearly defining intent and constraints.

# **Type Safety: The Invisible Hero**

Typescript’s strongest suit is type safety. Whether you’re building a small utility library or a sprawling enterprise application, catching errors at compile time rather than runtime is a game-changer. Typescript saves me countless debugging hours, especially when collaborating with others or revisiting old code. While tests can catch many issues, they can’t cover every edge case, and Typescript acts as an additional safety net.

I see this in action rather frequently when someone contributes code with typos, interface modifications or renaming constants. The second I pull those changes the type checker immediately complains. This has been incredibly helpful in avoiding critical errors. For instance, during a recent deployment to AWS Lambda, the type checker caught a mismatched parameter in a function, which would have otherwise caused a cascade of failures in dependent services. Super useful.

# **A Better Developer Experience**

Autocompletion, inline documentation, and robust refactoring tools—Typescript makes these features shine. Working in an editor like VSCode feels seamless with Typescript, and it’s hard to imagine giving up these productivity enhancements for a marginal speed boost in development. In addition to its other features, Typescript's built-in support for JSX is a significant advantage. It simplifies working with composable UI code by making it easier to handle props, manage HTML native attributes, and define event handlers.

This integration streamlines development and ensures consistency in how UI components are constructed and interacted with. Really priceless. By cleverly leveraging Typescript now I am no longer using console.log statements all over just to double check if some prop should or not be passed, what kind of value the event handler gets, how many arguments a function handler might receive, etc.

# **The Ecosystem Still Thrives**

Despite what the headlines might suggest, the Typescript ecosystem remains vibrant. Frameworks like Next.js, Angular, and Deno embrace Typescript as a first-class citizen, and community-driven tools are constantly evolving to improve its usage. Moreover, the transition from Typescript to plain JavaScript (if needed) is as simple as stripping the types—a luxury that other alternatives might not afford. And since Typescript is nothing more than a superset of JavaScript, integrating third-party code is straightforward, regardless their support for Typescript. That's huge 'cause the JavaScript ecosystem/community is enormous. Unmatched leverage!

# **Agility Without Sacrifice**

One of the criticisms against Typescript is that it imposes too much structure, supposedly hindering rapid prototyping. My experience says otherwise. Modern Typescript supports gradual typing, meaning you can start with “any” types or minimal annotations and tighten things up as the project matures. This flexibility allows me to prototype quickly while keeping the door open for stronger type enforcement later on.

In fact I think the root of this "issue" can be found in the default tendency to set the strict mode when setting up the Typescript compiler. When strict mode is on I also find it very problematic to be forced to define types all over the place. Turning that "evil" mode off gives me a great balance between freedom and type safety. Aggressively enforcing Typescript from the outset is rarely beneficial. For example, enforcing strict types from the very beginning of a project can overwhelm teams and stifle rapid prototyping.

Instead, a balanced approach, such as introducing types gradually and allowing for flexibility with "any" or less strict settings during early development phases, can foster both productivity and maintainability. Strict mode from the beginning is potentially harmful because it forces developers to define types extensively, even in early stages where flexibility is crucial. In early development phases, where rapid prototyping is essential, strict mode will slow down progress by requiring detailed type annotations for temporary or exploratory code.

# **It’s About More Than the Trends**

Programming languages and tools often see waves of hype and backlash. Decisions made by big players may suit their specific use cases but don’t necessarily align with the needs of individual developers or smaller teams. Typescript aligns with my priorities: maintainable, readable, and robust code. For me, that’s worth far more than chasing the latest trends. You might not like the verbosity of types definitions but that doesn't make the language a bad thing.

With proper conventions and more thoughtful settings, Typescript can be an invisible ally. For example, adhering to a convention like defining types only for public APIs or shared modules can reduce overhead while maintaining clarity. Type inference is more than enough most of the time, and using "any" as a type in scenarios like quick prototyping or handling third-party libraries without type definitions is nothing to be ashamed of. By proper conventions I mean that every project needs to cherry pick what set of features/strategies suit the most, instead of blindly taking recommended defaults proposed by other teams/projects despite their success.

# **Closing Thoughts**

While the tech landscape continues to evolve, my choice to stick with Typescript is rooted in its undeniable strengths: type safety, enhanced developer experience, and unmatched flexibility. Big players may move on, but for many of us, Typescript remains an indispensable part of our toolkit. I would love to see Typescript becoming the leader of JavaScript's future, by pushing the limits of the language developer wise and alleviate runtimes from the burden of constantly adding support to every feature the community wants for vanilla JavaScript.
