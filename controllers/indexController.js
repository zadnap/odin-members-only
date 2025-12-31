const renderIndex = async (req, res) => {
  res.render('index', { errors: null, oldData: null });
};

module.exports = { renderIndex };
