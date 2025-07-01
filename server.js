require("dotenv/config")
const express = require("express");
const app = express();
const port = 3000;
const Cryptr = require('cryptr');
const cors = require("cors");
const ENCRYPTED_HINT = "efa0f412fe7818ff43672d7ae8e95f25b859f906a5040c1b3a5ba96966ec66164433e7516ca486beba4b8c7ee4b6a98b2427394439f93956b6a818152b49939ed9b7ea42965e2bd20cc169e2440b9f00dcf0a9f81b01d67be50cf8d5704c8eb071b88f34af9b738677a8cae4d7155e09";
const SECRET_KEY = "msjHu@?YR!R/`E/D@WQ@SvJx%T*-F?hsjb0Dv>-5.0$E,+N%<st6M9";


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));

app.get("/", async (req, res) => {
  
  const yourHint = "Hello, this is your Bro. You have to use Cryptr to get your hint.";
  const Hint = ENCRYPTED_HINT;
  const encryptedHint = Hint;
  res.json({ hint: yourHint, encryptedHint });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


