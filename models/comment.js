module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    text: DataTypes.TEXT
  });
  return Comment;
};
