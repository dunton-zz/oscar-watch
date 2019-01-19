module.exports = app => {
  app.post("/save/*", (req, res) => {
    const data = req.body;
    const movies = data.movies;
    const userId = req.user;
    console.log(userId);
  });
};
