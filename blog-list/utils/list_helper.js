const dummy = (blogs) => {
  return 1;
}

const totalLikes = (posts) => {
  return posts.reduce((sum, post) => {
    return sum + post.likes;
  }, 0);
}

module.exports = {
  dummy,
  totalLikes
}