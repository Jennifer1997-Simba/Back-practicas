import{ArrayNotEmpty, IsNotEmpty,IsNumber,IsString} from "class-validator";

export class BaseProductDto{
    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsString(IsStringValidationOptions())
    readonly title:string;



    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsNumber(IsNotEmptyValidationOptions())
    readonly precio:number;



    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsString(IsStringValidationOptions())
    readonly descripcion:string;


    @IsnotEmpty(isNotEmptyValidationOptions ())
    @IsString(ArrayNotEmptyValidationOptions())
    readonly imagen:string[];




    
}



