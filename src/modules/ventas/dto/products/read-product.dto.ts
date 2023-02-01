import { BaseProductDto } from "./base-product.dto";




@Exclude()
export class readProductDto extends BaseProductDto{
    @Exponse()
    readonly title;

    @Exponse()
    readonly price;

    

}