const create = (req, res, next) => {
  req.app
    .get('db')
    .create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl])
    .then(response => res.status(200).json())
    .catch(response => res.status(500).json());
};

const getOne = (req, res, next) => {
  req.app
    .get('db')
    .read_product(+req.params.id)
    .then(response =>{res.status(200).json(response)})
    .catch(response => res.status(500).json());
};

const getAll = (req, res, next) => {
  req.app
    .get('db')
    .read_products()
    .then(response => {res.status(200).json(response);
    })
    .catch(response => {res.status(500).json()});
};

const update = (req, res, next) => {
  req.app
    .get('db')
    .update_product([req.params.id, req.query.desc])
    .then(response => res.status(200).json())
    .catch(response => res.status(500).json());
};

const deleteProduct = (req, res, next) => {
  req.app
    .get('db')
    .delete_product(req.params.id)
    .then(response => res.status(200).json())
    .catch(response => res.status(500).json());
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleteProduct
};