import { generateJWT } from "../utils/jwt";

export const loginService = async (
  email: string,
) => {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  const token = generateJWT(email)

  return { token };
};