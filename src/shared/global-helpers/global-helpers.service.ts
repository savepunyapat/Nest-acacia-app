import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';
@Injectable()
export class GlobalHelpersService {
    getThaiDate(): string {
        return format(new Date(), 'dd MMMM yyyy', { locale: th }) + ' วันนี้';
    }
}
