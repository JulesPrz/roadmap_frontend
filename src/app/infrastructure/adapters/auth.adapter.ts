import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { User } from "../../domain/models/user.model";
import { AuthRepository } from "../../domain/repositories/auth.repository";

const MOCK_USERS: User[] = [
    { userId: 1, username: 'Manuel Cuevas',  email: 'manuel@test.com', password: '1234', roleId: 'admin' },
    { userId: 2, username: 'Ana Gonzales',  email: 'ana@test.com', password: '5678', roleId: 'user'},
]

@Injectable ({ providedIn: 'root' })
export class AuthAdapter implements AuthRepository {

    login(email: string, password: string): Observable<User> {
        const user = MOCK_USERS.find(u => u.email === email && u.password === password);
        if (user) {
            const { password: _, ...safeUser } = user;
            localStorage.setItem('currentUser', JSON.stringify(safeUser));
            return of(safeUser as User);
        }
        return throwError(() => new Error('Credenciales Incorrectas'));
    }

    logout(): void {
        localStorage.removeItem('currentUser');
    }

    getCurrentUser(): User | null {
        const stored = localStorage.getItem('currentUser');
        return stored ? JSON.parse(stored) : null;
    }
}