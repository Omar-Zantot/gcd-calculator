import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gcd-calculator';
  number1!: number | null;
  number2!: number | null;
  gcdResult!: number | null;
  err_msg: string = '';
  calculateGCD() {
    // Implement GCD calculation logic using Euclidean algorithm
    this.gcdResult = this.euclidean_gcd(this.number1!, this.number2!);
    if (this.gcdResult == null) this.errorLog();
  }

  euclidean_gcd(a: number, b: number) {
    if (this.number1 == null || this.number2 == null) this.errorLog();

    console.log(this.number1);
    console.log(this.number2);

    if (a == 0 || b == 0) {
      this.errorLog();
      return null;
    }
    this.err_msg = '';
    while (b) {
      const temp = a;
      a = b;
      b = temp % b;
      console.log(b);
    }
    return a;
  }

  reset() {
    this.number1 = null;
    this.number2 = null;
    this.gcdResult = null;
  }

  errorLog() {
    this.err_msg =
      this.number1 == null || this.number2 == null
        ? 'Sorry enter a number 😅'
        : 'Sorry enter a vaild number (0 not allowed) 😁';
    setTimeout(() => {
      this.err_msg = '';
      this.reset();
    }, 2500);
  }
}
