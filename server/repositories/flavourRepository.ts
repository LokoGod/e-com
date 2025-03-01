import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllFlavours = async () => {
  return prisma.flavour.findMany();
};

const createFlavour = async (flavourName: string) => {
  return prisma.flavour.create({
    data: {flavourName},
  })
};

// const createFundTransaction = async (
//   memberId: number,
//   monthId: number,
//   donated_amount: number,
//   donated_date: Date
// ) => {
//   const fundTransaction = await prisma.fundTransaction.create({
//     data: {
//       memberId,
//       monthId,
//       donated_amount,
//       donated_date,
//     },
//   });
//   return fundTransaction;
// };

// const createInventoryItems = async (
//   name: string,
//   description: string,
//   price: number,
//   quantity: number,
//   manufactureDate: string,
//   expireDate: string
// ) => {
//   return prisma.inventory.create({
//     data: { name, description, price, quantity, manufactureDate, expireDate },
//   });
// };

// const getFundTransactionsByMonth = async (monthId: number) => {
//   return prisma.fundTransaction.findMany({
//     where: { monthId: monthId },
//     include: { member: true, month: true },
//   });
// };

// const getAllMonthlyDetails = async () => {
//   return prisma.months.findMany({
//     include: {fundDetails: true}
//   })
// }

// const getFundTransactionsByMember = async (memberId: number) => {
//   return prisma.fundTransaction.findMany({
//     where: { memberId: memberId },
//     include: { member: true, month: true },
//   });
// };

const flavourRepository = {
  getAllFlavours,
  createFlavour
  // createFundTransaction,
  // getFundTransactionsByMonth,
  // getFundTransactionsByMember,
  // getAllMonthlyDetails
};

export default flavourRepository;
