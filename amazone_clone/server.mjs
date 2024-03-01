import express from "express";
import axios from "axios";
const app = express();
const port = 3100;

app.get("/", async (req, res) => {
  res.send("hlo world");
});
app.post("/khalti-api", async (req, res) => {
  const payload = req.body;
  const khaltiRes = await axios.post(
    "https://khalti.com/api/v2/epayment/initiate/",
    payload,
    {
      headers: {
        Authorization: `"test_secret_key_e067b7ede671469ba1e7cb825bd6b3ad `,
      },
    }
  );
  if (khaltiRes) {
    res.json({
      success: true,
      data: khaltiRes?.data,
    });
  } else {
    res.json({
      success: false,
      message: "something went wrong",
    });
  }
  console.log(khaltiRes);
});
// try {
//   const response = await axios.get(
//     `https://khalti.com/api/v2/payment/verify/${req.params.token}/${
//       req.params.amount
//     }/${"test_secret_key_e067b7ede671469ba1e7cb825bd6b3ad"}`
//   );
//   res.json(response.data);
// } catch (error) {
//   console.log(error);
//   res
//     .status(500)
//     .json({ error: "An error occurred while verifying the payment." });
// }

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
