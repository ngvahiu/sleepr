import { AbstractDocument } from "@app/common";
import { AbstractRepository } from "@app/common/database/abstract.repository";
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReservationDocument } from "./models/reservation.schema";
import { Model } from "mongoose";

@Injectable()
export class ReservationsRepository extends AbstractRepository<AbstractDocument> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectModel(ReservationDocument.name)
    reservationModel: Model<ReservationDocument>,
  ) {
    super(reservationModel);
  }
}