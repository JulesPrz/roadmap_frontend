import { Inject, Injectable } from "@angular/core";
import { AuthRepository } from "../repositories/auth.repository";
import { AUTH_REPOSITORY } from "../repositories/auth.repository.token";

@Injectable({ providedIn: 'root'})
export class LogoutUseCase {
    constructor(
        @Inject(AUTH_REPOSITORY) private authRepository: AuthRepository
    ) {}

    execute(): void {
        this.authRepository.logout();
    }
}