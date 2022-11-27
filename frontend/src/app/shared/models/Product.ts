export class Product{
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  tags?: string[];
  imageUrl!: string;
}