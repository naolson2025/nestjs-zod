import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ZodError } from "zod";

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: any) {}

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      const result = this.schema.parse(value);
      return result;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          statusCode: 400,
          message: "Validation failed",
          errors: error.errors.map((err) => {
            return {
              code: err.code,
              message: err.message,
              path: err.path,
            };
          }),
        });
      } else {
        throw error;
      }
    }
  }
}
