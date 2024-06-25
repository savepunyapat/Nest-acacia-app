import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
    
    getServerDate(): string {
        return (new Date().toISOString()+"date from utils service");
    }
}
