export class Product {
  id: number;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(info: any) {
    this.id = info.id;
    this.name = info.name;
    this.price = info.price;
    this.createdAt = info.created_at;
    this.updatedAt = info.updated_at;
  }
}
