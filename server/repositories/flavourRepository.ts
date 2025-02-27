import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllFlavours = async () => {
  return prisma.flavour.findMany()
}

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

const fundTransactionRepository = {
  getAllFlavours,
  // createFundTransaction,
  // getFundTransactionsByMonth,
  // getFundTransactionsByMember,
  // getAllMonthlyDetails
};

export default fundTransactionRepository;
