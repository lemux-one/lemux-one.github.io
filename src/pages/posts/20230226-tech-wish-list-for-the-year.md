---
layout: ../../layouts/MdPostLayout.astro
title: Tech wish list for the year
description: "I like learning about new things, but what should I go for next..."
image:
    url: "https://docs.astro.build/assets/rays.webp"
    alt: "Thumbnail of Astro rays."
pubDate: 2023-02-26
tags: ["learning in public", "web"]
---

Since I started my journey as a software developer I have been using mostly the same languages and tech stacks. After using Java for years for desktop and web development I recently switched to Python. This change was very smooth since Java and Python are both imperative languages and share a good deal of similarities being both inspired by C/C++ syntax and programming style.

## Erlang?, Elixir?

In a recent meeting with some friends I was amazed by a revelation made by one of them. He had many years using Node and yet he was thrilled about a new stack he was forced to adopt, and a few years later he prefers this new functional style for web development compared to the "old" ways of Node. That made an impact on me. For the first time I had the chance to talk to someone actually using something I've been reading about a couple of times long ago. This friend was happy of using Elixir and he didn't want to move back to Node (or any other imperative language whatsoever) and I found that very inspiring indeed. So here I am reading a lot and watching a lot of tutorials on Youtube to "discover" this "new" stack and I am shocked...

Elixir (thanks to Erlang) is a technical wonder for the current web development scenario. It provides natively what other stacks are trying to sell as pure innovation. I remember how Java 8 made a huge impact on developers around the world for its brand new support for lambdas and functional interfaces. I also remember how coroutines and fibers in Go where big selling points when the language was presented to the dev community. Those were great features but the all were already built-in features for Erlang and its powerfull BEAM runtime. Those "modern" features were actually born before the 90's and yet I didn't know anything about it at all.

Erlang is amazing but it is also quite complex for people used to imperative languages (or any other "normal" programming language) and it feels like a foreign language to me at least. That's way Elixir is so relevant. Elixir explotes Erlang (language, runtime and ecosystem) but presenting a more tamable and familiar language to read and write code with. Take Erlang's power wrapped in Ruby's expressiveness and you get Elixir.

## From imperative to functional

Elixir is functional and immutable by design. That is something quite weird for someone comming from imperative and mutable languages like Java, Python, PHP, C/C++, C#, JavaScript, and the likes. I personally feel overwhelmed and powerless because my instincts and intuition are completely useless when trying to write code in Elixir. I tryed to mess around with Elixir and its interactive shell but it was pointless. I had to take the time to read some books, online posts and forums just to get the general hang of it.

Elixir has no loop constructs, uses different approach for branching and flow control, forbids mutating variables and most of its "keywords" are powered by internal macros instead of actual compiler instructions. It blows my mind! And yet it makes more and more sense as I read more and more about the reasons behind those "features".

## What's the big deal?

I know it sounds like a hell but it's totally worth it. Apart from the new perspective and mind changing paradigm it also brings a great side effect (that is actually the core reason behind its creation in the first place): it excels in concurrency, multi node distributed computation and fault tolerance. That is huge! You get quite a robust and well tested runtime that scales vertically and horizontally with little extra effort while not compromising productivity from the developers.

I am very much sold!

## So

Elixir is great but is not a tech stack by its own. Enters Phoenix Framework and you are like: Oh my god! Phoenix brings back the joy of being a full-stack developer by imposing no sacrifice over the "modern" client-side experience that front-end stacks are making prevalent over the internet. That's the killing feature here!

The whole stack is coined as "PETAL" (Phoenix, Elixir, TailwindCSS, Alpine.js, LiveView) and it imposes a very opininated set of components but it offers a trully end-to-end development experience. And that's my new (and hopefully a long standing choice) item in the list of tech stacks that I want to learn this year. Let's see how it goes.
