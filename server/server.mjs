import express from "express";
import router from "./routes/record.mjs";
import cors from 'cors'

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use('/record', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

