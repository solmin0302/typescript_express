import * as mongoose from "mongoose";
import { Db } from "mongodb";

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  return connection.connection.db;
};
