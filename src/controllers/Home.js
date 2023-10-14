class HomeController {
  index(req, res) {
    res.json({
      itsOk: true,
    });
  }
}

export default new HomeController();
