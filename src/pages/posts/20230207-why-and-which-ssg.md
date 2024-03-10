---
layout: ../../layouts/MdPostLayout.astro
title: Why and which SSG
description: "After learning about jamstack, I couldn't stop!"
image:
    url: "https://docs.astro.build/assets/arc.webp"
    alt: "Thumbnail of Astro arcs."
pubDate: 2023-02-07
tags: ["SSG", "web"]
---

So I want to have a very simple blog (this one actually) but I also want to do it as much old school as possible. I now my way in the web development world being a developer myself, so I want also to be able to control every little aspect as much as possible without having to rely on third party software with some "magical" features hidden inside big black boxes of batteries-included features. I know this is probably leading to more work than the average, but those are my conditions to feel like the experience could provide me with some extra lessons as a professional software developer. Hands on!

## Available alternatives

Creating websites is a lot more easy today than it was a few years ago. There a lot of hosting providers ready to fullfill every posible need for a regular website. They are also quite affordable. However I had my eye put on a very  particular service: [GitHub Pages](https://pages.github.com/). This is not a surprise taking into account that I am a software developer who deals with [GitHub]("https://github.com/") from time to time, so it made perfect sense to take use of this great service they opened to the public and so many people are happily using ever since. But, this decision had very specific implications.

## [GitHub Pages](https://pages.github.com/) says so

Regular web hosting platfomrs are great but I wanted to try out [GitHub Pages](https://pages.github.com/) for once and that forced me to look at some "serverless" alternatives. Of course that [GitHub Pages](https://pages.github.com/) proposes a really good and solid option named [Jekyll](https://jekyllrb.com/), but reading the installation and getting started guides I had the sense that it was way too involved and quirky. Also setting up a whole [Ruby](https://www.ruby-lang.org/en/) stack on my device just to create a dead simple blog was too much for me. There has to be a simpler alternative, right?

The ["Jamstack"](https://jamstack.org/) has been growing rapidly in the last few years and I've been intrigued and curious about it for quite a bit. The speed boost obtained by not depending on a server processing at all is quite interesting but, in my opinion, the killer feature about this web development approach is the free (or almost free) of charge "hosting" availability from [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) networks to [S3](https://aws.amazon.com/s3/) buckets. This kind of sites can be deployed virtually anywhere with little to no effort at all.

## So many choices

So far so good. However there are currently a lot of options to choose from when we opt for a static site generator (SSG) and they all seem very capable and feature rich since we start reading their "getting starter" guides. The first one I stumbled on was [Hugo](https://gohugo.io/). This "little" guy grows with new features by day and right now it looks like a swif knive, ranging from small single page sites to batteries-included blogs. From there on I felt overwhelmed and started looking for simpler alternatives for my really basic needs.

## [maksite.py](https://github.com/sunainapai/makesite) to the rescue

After searching, reading, trying, messing around and get frustrated with several SSG options I stumbled with [maksite.py](https://github.com/sunainapai/makesite) and it made sense since the very begging. It was tiny. It was simple. It was easy to look into its inner workings to tweak any part of it. It provided the bare bones to be considered a SSG but it was all I actually needed. Indeed it had more than I required for my project and I just forked it and remove the bloat and it was a breeze to do so. That little guy feels like a great tool and I am very happy with it so far.

Don't get me wrong. My choice is probably not a very smart choice for regular users because you don't get fancy and fairly commong features with [maksite.py](https://github.com/sunainapai/makesite). So it is maybe the least recommended alternative for regular SSG needs but, I do want to mess around with the internal implementation behind SSGs and [maksite.py](https://github.com/sunainapai/makesite) is very accessible for that specific endeavor. It is written in simple and readable [Python](https://www.python.org/), it has no required external dependencies and the author is not open to add new features because it is simple and trimmed down by design. That's actually what I was looking for when I started my quest for a dead simple, hackable, tiny SSG.
