import { Injectable } from "@nestjs/common";
import { PrimsaService } from "./prisma.service";
import { Prisma, Flavour } from "@prisma/client";

@Injectable()
export class FlavourService {
    constructor(private prisma: PrimsaService) {}

    async flavour(
        flavourWhereUniqueInput: Prisma.FlavourWhereUniqueInput,

    ): Promise<Flavour | null> {
        return this.prisma.flavour.findUnique({
            where: flavourWhereUniqueInput,
        })
    }
}