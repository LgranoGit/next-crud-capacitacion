import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

export default function loginHandler(req, res) {
  const { email, password } = req.body;

  if (email === "a@a.com" && password === "123") {
    // expire in 30 days    
    // console.log(Math.floor(Date.now() / 1000));
    const secret = new TextEncoder().encode(process.env.SECRET);
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email,
        username: "Lucas",
      },
      secret
    );

    const serialized = serialize("Token", token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json({
      message: "Login successful",
    });
  }

  return res.status(401).json({ error: "Invalid credentials" });
}
