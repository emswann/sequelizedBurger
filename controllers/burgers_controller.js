const db = require('../models');

module.exports = app => {
  app.get('/', (req, res) =>
    db.Burger.findAll({})
    .then(dbBurger => {
      var hbsObj = {burgers: dbBurger};
      res.render('index', hbsObj);
    })
  );
    
  app.post('/api/burgers', (req, res) =>
    db.Burger.create(req.body)
    .then(dbBurger =>
      res.json(dbBurger)
    )
  );

  app.put('/api/burgers/:id', (req, res) => {
    db.Burger.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      })
    .then(dbBurger =>
      res.json(dbBurger)
    )
  });
};