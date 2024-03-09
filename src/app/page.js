

const HomePage = async () => {
const res = await fetch('http://localhost:5000/posts', {
  cache: 'no-store'
})
const posts = await res.json()
  return (
    <div>
      {
        posts?.length && posts.map(post => <div key={post.id}>
          <h1>{post?.title}</h1>
          <h1>{post?.views}</h1>
        </div>)
      }
    </div>
  );
};

export default HomePage;