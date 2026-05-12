import jwtEncode from "jwt-encode";

const secret = process.env.EXPO_PUBLIC_SECRET_KEY || ""

export const generateJWT = (
  email: string
) => {
  const payload = {
    email,
    exp:
      Math.floor(Date.now() / 1000) +
      60 * 60,
  };

  return jwtEncode(payload, secret);
};