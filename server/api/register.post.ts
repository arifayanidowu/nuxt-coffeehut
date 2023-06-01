import * as bcrypt from "bcrypt";
import { prisma } from "./auth/[...]";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { email, password } = body;

    if (!email || !password) {
      throw createError({
        statusCode: 400,
        statusMessage: "Username and password are required",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return {
      statusCode: 200,
      body: user,
    };
  } catch (error) {
    const err = error as Error;
    throw createError({
      statusCode: 500,
      statusMessage: err.message || "Internal server error",
    });
  }
});
