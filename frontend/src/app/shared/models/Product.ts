export class Product{
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  first_image_url!: string;
  category_id!: number;
  inventory!: number;
  images?: [];
}