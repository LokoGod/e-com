import flavourRepository from "../repositories/flavourRepository";

const getAllFlavours = async (req: any, res: any, next: any) => {
  try {
    const flavours = await flavourRepository.getAllFlavours();
    res.status(200).json(flavours);
  } catch (error) {
    next(error);
  }
};

export { getAllFlavours };
