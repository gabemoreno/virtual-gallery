// @ts-nocheck
import { readFile, access, readdir } from 'fs/promises'
import { compileMDX } from 'next-mdx-remote/rsc'
import path, { join } from 'path'
const POSTS_FOLDER = path.join(process.cwd(), 'src/app/posts')

export async function readPostFile(slug) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`))
  try {
    await access(filePath)
  } catch (err) {
    return null
  }

  const fileContent = await readFile(filePath, { encoding: 'utf8' })
  return fileContent
}

export function getPostSlugs() {
  return readdir(POSTS_FOLDER)
}

export async function getAllPosts() {
  const slugs = await getPostSlugs()

  const promises = slugs.map(async (slug) => {
    const markdown = await readPostFile(slug.replace('.mdx', ''))
    const { frontmatter } = await compileMDX({
      source: markdown,
      options: { parseFrontmatter: true },
    })
    return { ...frontmatter, href: `/blog/${slug.replace('.mdx', '')}` }
  })
  const posts = await Promise.all(promises)
  // sort posts by date in descending order
  const sortedPosts = posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return sortedPosts
}
