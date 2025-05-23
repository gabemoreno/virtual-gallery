// @ts-nocheck
import { getAllPosts } from '../utils/blogHelpers'
import CardContainer from './CardContainer'
import PageContainer from './PageContainer'

export default async function PostsList() {
  const posts = await getAllPosts()
  return (
    <div className="bg-stone-50 p-6 rounded-lg w-full px-12">
      <section>
        <h2>View a list of all my posts here</h2>
      </section>
      <CardContainer cards={posts} />
    </div>
  )
}
