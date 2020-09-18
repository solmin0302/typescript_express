import Logger from "./logger";
import mongooseLoader from "./mongoose";

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info("✌️ DB loaded and connected!");

  const userModel = {
    name: "userModel",
    model: require("../models/user").default,
  };
};
