import { BaseProductDto } from "./base-product.dto";




@Exclude()
export class readCategoryDto extends BaseProductDto{
    @Exponse()
    readonly title;

    @Exponse()
    readonly price;

    

}