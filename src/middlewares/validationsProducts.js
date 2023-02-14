const validateId = async (req, res, next) => { 
  const { id } = req.params;
  if (id.length === 0 || id === undefined) {
    return res.status(400).json({ message: 'ID missing' });
  }
 return next();
};

const validateBodyPost = (req, res, next) => {
  const { name } = req.body;
  const requiredProperties = ['name'];
  if (!requiredProperties.every((property) => property in req.body)) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  return next();
};

module.exports = {
  validateId,
  validateBodyPost,
};