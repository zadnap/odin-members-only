const renderIndex = async (req, res) => {
  res.render('index', { user: {} });
};

module.exports = { renderIndex };
