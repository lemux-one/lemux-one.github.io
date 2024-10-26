---
layout: ../../layouts/MdPostLayout.astro
title: "Bun, Deno, Node: Picking one is not so simple…"
description: "Picking the right Javascript runtime is not just a matter of built-in features and DX..."
image:
  url: "/20241026-bun-deno-node.webp"
  alt: "AI generated image showing node, deno and bun as roads to go"
pubDate: 2024-10-26
tags: ["hosting", "javascript", "opinion", "web"]
---

I’m currently working on a simple web app to assist my daughter with her homework. Nothing crazy, but it needs to be functional and easy to deploy. Lately, I’ve been all about [JavaScript](https://en.wikipedia.org/wiki/JavaScript) — my professional work is pushing me deeper into it every day. So naturally, I’ve started eyeing some of the newer runtimes like [Bun](https://bun.sh/) and [Deno](https://deno.com/), wondering how I could take advantage of them in my own projects.

Personally, I root for [Bun](https://bun.sh/) because I want to see a [Zig](https://ziglang.org/)-based project succeed. I’d love for [Zig](https://ziglang.org/) to get some traction in the not-too-distant future. I first stumbled upon [Bun](https://bun.sh/) when reading a thread about [Zig](https://ziglang.org/), and it caught my eye. At the time, I didn’t think I’d actually use it, but here I am testing it out for a real project. Funny how these things happen… But after all the buzz around [Deno 2.0](https://deno.com/blog/v2.0), I started feeling torn. It seemed only fair to test [Deno](https://deno.com/) before picking any sides.

I started playing around with both, trying to get a feel for their developer experience (DX) and which one felt more natural. First impressions? Pretty great across the board. Both runtimes have a ton of features built-in, making it easy to get started without relying on external modules for basic stuff.

What really impressed me was the built-in [TypeScript](https://www.typescriptlang.org/) support in both. No extra setup, just out-of-the-box TS compatibility — a huge win for me since I love the static typing and the seamless [LSP](https://en.wikipedia.org/wiki/Language_Server_Protocol) experience it brings to code editing. While their test-running capabilities were also interesting, it wasn’t super relevant for this particular project.

And then there’s speed. [Bun](https://bun.sh/) really shines in terms of startup times and runtime execution — it feels faster, which could be a big deal if performance becomes a priority.

So far, I was leaning toward [Deno](https://deno.com/) as my winner. It’s more mature and stable compared to [Bun](https://bun.sh/), which still feels like it’s in early stages. But then deployment threw a wrench into my plans. My hosting provider uses [FreeBSD](https://www.freebsd.org/), which I’m totally fine with, but neither [Bun](https://bun.sh/) nor [Deno](https://deno.com/) has official support for it. My proof of concept failed to run in production because of this. [Node](https://nodejs.org/), on the other hand, has first-class support on my host. No surprises there — [Node](https://nodejs.org/)’s been around forever, and its popularity means most providers support it out of the box.

So for now, [Node](https://nodejs.org/) wins — not because it’s the one I want to use, but because it’s the most practical for my setup. [Bun](https://bun.sh/) and [Deno](https://deno.com/) are both super promising, especially with their [TypeScript](https://www.typescriptlang.org/) support and performance perks, and I’m excited to see how they evolve. But until hosting providers catch up and support these newer runtimes, [Node](https://nodejs.org/) will remain my go-to for deployment.

Disclaimer 1: I’ve seen hints online about compiling [Bun](https://bun.sh/) or [Deno](https://deno.com/) for [FreeBSD](https://www.freebsd.org/), but that’s not something I’m willing to dive into right now. It seems like a pretty involved process with no guarantee of success. I’d rather wait for official support.

Disclaimer 2: Although changing hosting provider is a valid suggestion, I’m not willing to do so since there are a bunch of other perks I really appreciate about the platform.
