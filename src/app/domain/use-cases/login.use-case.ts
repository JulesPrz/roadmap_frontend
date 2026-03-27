import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { AuthRepository } from "../repositories/auth.repository";
import { AUTH_REPOSITORY } from "../repositories/auth.repository.token";

@Injectable({ providedIn: 'root' })
export class LoginUseCase {
    constructor(
        @Inject(AUTH_REPOSITORY) private authRepository: AuthRepository
    ) {}

    execute(email: string, password: string): Observable<User> {
        return this.authRepository.login(email, password);
    }
}