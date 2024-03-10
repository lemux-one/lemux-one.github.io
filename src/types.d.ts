import type { MarkdownInstance } from "astro"

type Frontmatter = {
    layout: string,
    title: string,
    pubDate: string,
    description: string,
    author: string,
    image: {
        url: string,
        alt: string,
    },
    tags: string[]
}

type Post = MarkdownInstance<Frontmatter>

export { Frontmatter, Post }