import { userRepositories } from "@/lib/repositories/userRepositories";

const verifyUserById = async ({ userId }) => {
  const update = {
    isVerified: true,
  };
  const user = await userRepositories.findUserByIdAndUpdate({ userId }, update);
  
  return user;
};

export { verifyUserById };
