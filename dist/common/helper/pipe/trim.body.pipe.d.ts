import { PipeTransform } from '@nestjs/common';
export declare class TrimBodyPipe implements PipeTransform {
    constructor();
    trimData(body: Record<string, any>): void;
    transform(body: Record<string, any>): Record<string, any>;
}
