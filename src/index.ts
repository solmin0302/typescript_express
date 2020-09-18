import * as express from "express";

import * as dotenv from "dotenv";

import Logger from "./loaders/logger";

dotenv.config();

async function startServer() {
  const app = express();

  await require("./loaders").default({ expressApp: app });

  app.listen(3065, () => {
    console.log("asdasd");
    Logger.info(`server is running on ${app.get("port")}`);
  });
}

startServer();

// const prod: boolean = process.env.NODE_ENV === "production";

// startMongoDb();

// app.set("port", prod ? process.env.PORT : 3065);

// if (prod) {
//   app.use(hpp());
//   app.use(helmet());
//   app.use(morgan("combined"));
//   app.use(
//     cors({
//       origin: /solmin\.com$/,
//       credentials: true,
//     })
//   );
// } else {
//   app.use(morgan("dev"));
//   app.use(
//     cors({
//       origin: true,
//       credentials: true,
//     })
//   );
// }

// app.use("/", express.static("uploads"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(
//   expressSession({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET!,
//     cookie: {
//       httpOnly: true,
//       secure: false,
//       domain: prod ? ".solmin.com" : undefined,
//     },
//     name: "rnbck",
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.get("/", (req, res) => {
//   res.send("asdasdasd");
// });
