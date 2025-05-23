// @ts-nocheck
import { compileMDX } from 'next-mdx-remote/rsc'
import { readPostFile } from '@/app/utils/blogHelpers'

import { notFound } from 'next/navigation'
import Footer from '@/app/components/Footer'
import Card from '@/app/components/Card'
import Header from '@/app/components/Header'
import Main from '@/app/components/Main'
import CardContainer from '@/app/components/CardContainer'
import PageContainer from '@/app/components/PageContainer'
import PostsList from '@/app/components/PostsList'
import Head from 'next/head'

const components = { Footer, Card, Header, Main, CardContainer, PageContainer, PostsList }

export default async function Page({ params }) {
  const markdown = await readPostFile(params.slug)

  if (!markdown) {
    notFound()
  }

  const { content, frontmatter } = await compileMDX({
    source: markdown,
    options: { parseFrontmatter: true },
    components,
  })
  return (
    <div>
      <div>{content}</div>
    </div>
  )
}
