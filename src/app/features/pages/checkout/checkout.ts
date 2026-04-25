import { Component, inject, computed, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../core/services/cart-service';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  private router = inject(Router);
  cartService = inject(CartService);

  step = signal<1 | 2>(1);

  form = {
    nome: '',
    email: '',
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    pagamento: 'pix',
  };

  goToStep2() {
    if (!this.isStep1Valid()) return;
    this.step.set(2);
  }

  goToStep1() {
    this.step.set(1);
  }

  isStep1Valid(): boolean {
    return !!(
      this.form.nome &&
      this.form.email &&
      this.form.cep &&
      this.form.rua &&
      this.form.numero &&
      this.form.bairro &&
      this.form.cidade &&
      this.form.estado
    );
  }

  confirmar() {
    if (!this.isStep1Valid()) return;
    this.cartService.clear();
    this.router.navigate(['/confirm']);
  }
}
