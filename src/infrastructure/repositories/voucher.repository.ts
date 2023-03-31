import fs from "fs";
import VoucherModel from "./models/voucher-model";

export const folderPathVouchers = "./src/local-data/vouchers/";

export default class VoucherRepository {
  getById(id: string): VoucherModel | null {
    let data;
    try {
      const path = folderPathVouchers + id.toLowerCase() + ".json";
      data = fs.readFileSync(path, "utf8");
      const voucher: VoucherModel = JSON.parse(data);
      return voucher;
    } catch (err) {
      return null;
    }
  }
}
