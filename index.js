import app from "./app";
import listEndpoints from "express-list-endpoints";

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Api running at http://localhost:${port}`);
      console.log(listEndpoints(app));
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

start(8080);
