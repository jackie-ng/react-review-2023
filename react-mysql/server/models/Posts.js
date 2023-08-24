module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    // title, post content, author
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  return Posts
}
