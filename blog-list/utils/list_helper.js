const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => {
    return sum + blog.likes;
  }, 0);
}

const favoriteBlog = (blogs) => {
  mostLikes = 0
  mostLikedBlog = null;
  blogs.forEach(blog => {
    if(blog.likes > mostLikes) {
      mostLikedBlog = blog;
      mostLikes = blog.likes;
    }
  })
  return mostLikedBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}