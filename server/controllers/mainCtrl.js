

module.exports = {
  readProducts (req, res) {
    const dbInstance = req.app.get('db')
    dbInstance.select_all()
    .then(response => res.status(200).send(response))
    .catch(error => console.log(error))
  }
}