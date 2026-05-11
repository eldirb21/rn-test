import jwtEncode from "jwt-encode";

const secret = "MY_SECRET";

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