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
  });

  Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
      onDelete: "cascade", //if delete a post => delete every comment in that post
    })
  }
  return Posts
}
