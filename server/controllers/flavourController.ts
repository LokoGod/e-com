import { NextFunction, Request, Response } from "express";
import flavourRepository from "../repositories/flavourRepository";

const getAllFlavours = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const flavours = await flavourRepository.getAllFlavours();
    if (!flavours.length) {
      res.status(404).json("No flavours found")
    }
    res.status(200).json(flavours);
  } catch (error) {
    next(error);
  }
};

const createFlavour = async (req: Request, res: Response, next: NextFunction) => {
  const { flavourName } = req.body
  try {
    const flavours = await flavourRepository.createFlavour(flavourName)
    res.status(201).json(flavours)
  } catch (error) {
    next(error)
  }
}

// const createFundTransaction = async (req: any, res: any) => {
//   const { memberId, monthId, donated_amount, donated_date } = req.body;
//   try {
//     const createdFund = await fundTransactionRepository.createFundTransaction(
//       memberId,
//       monthId,
//       donated_amount,
//       donated_date
//     );
//     res.status(201).json({ createdFund });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

export { getAllFlavours, createFlavour };
