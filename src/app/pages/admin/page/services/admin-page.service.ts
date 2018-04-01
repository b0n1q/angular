import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RestApiService } from '../../../../services/rest-api.service';
import { PathConfig } from './../../../../../app-config/path.config'

@Injectable()
export class AdminPageService {
    constructor(
        private restApiService: RestApiService
    ) {
    }

    public getUser(): Observable<any> {
        return new Observable((observer) => {
            this.restApiService.getItems(
                `${PathConfig.getUsersEndpoint}`,
                (err) => {
                    console.error(err);
                }
            ).first()
                .subscribe((res) => {
                    observer.next(res);
                });
        })
    }

}
