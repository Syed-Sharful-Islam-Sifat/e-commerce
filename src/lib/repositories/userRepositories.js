import User from "../models/Users";

const userRepositories = {
  findUser: async ({ userName, email }) => {
    const user = await User.findOne({
      $or: [{ userName }, { email }],
    });

    return user;
  },
  findUserByIdAndUpdate: async ({userId},update)=>{
   const user = await User.findByIdAndUpdate(userId,update);

   return user;
  },
  createUser: async ({ data }) => {
    const user = await User.create({
      ...data,
    });

    return user;
  },
};

export { userRepositories };
