
export const userFetch = (req, res) {
  console.log(req);
  const username = req.decoded.data;
  return models.User
  .find({
    include: [{
      model: models.Favorite,
      as: 'favorites',
      required: false,
      attributes: ['id', 'name'],
      through: { attributes: [] }
    }],
    where: { username }
})
}
