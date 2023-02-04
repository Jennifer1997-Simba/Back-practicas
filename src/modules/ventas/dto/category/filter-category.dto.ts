import { PaginationDto } from "../pagination/pagination.dto";


export class FilterCategoryDto extends PaginationDto{
    @isOptional()
    @IsString(isStringValidationOptions())
    readonly title;
    


}