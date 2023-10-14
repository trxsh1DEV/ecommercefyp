class HomeController {
  index(req, res) {
    res.json({
      itsOk: 'OK',
    });
  }

  // async store(req, res) {

  // }

  // async update(req, res) {

  // }

  // async delete(req, res) {

  // }
}

export default new HomeController();
