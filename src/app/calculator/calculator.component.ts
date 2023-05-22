import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  title = 'angular-calculator-app';
  subDisplayText = '';
  mainDisplayText = '';
  operand1 = 0;
  operand2 = 0;
  operator = '';
  calculationString = '';
  answered = false;
  operatorSet = false;

  pressKey(key: string) {
    if (this.isOperator(key)) {
      const lastKey = this.getLastKey();
      if (this.isOperator(lastKey) || this.mainDisplayText === '') {
        this.operatorSet = true;
        return;
      }
      this.operand1 = parseFloat(this.mainDisplayText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainDisplayText.length === 10) {
      return;
    }
    this.mainDisplayText += key;
  }

  allClear() {
    this.mainDisplayText = '';
    this.subDisplayText = '';
    this.operatorSet = false;
  }

  clear() {
    if (this.mainDisplayText) {
      const removedText = this.mainDisplayText.slice(-1);
      if (this.isOperator(removedText)) {
        this.operatorSet = false;
      }
      this.mainDisplayText = this.mainDisplayText.slice(0, -1);
    }
  }

  getAnswer() {
    this.calculationString = this.mainDisplayText;
    this.operand2 = parseFloat(this.mainDisplayText.split(this.operator)[1]);
    if (this.operator === '/') {
      this.calculateResult(this.operand1 / this.operand2, 9);
    } else if (this.operator === 'x') {
      this.calculateResult(this.operand1 * this.operand2, 9, 'Range Exceeded');
    } else if (this.operator === '-') {
      this.calculateResult(this.operand1 - this.operand2);
    } else if (this.operator === '+') {
      this.calculateResult(this.operand1 + this.operand2, 9, 'Range Exceeded');
    } else {
      this.subDisplayText = 'ERROR: Invalid Operation';
    }
    this.answered = true;
  }

  sanitizeInput(value: string) {
    const sanitizedValue = value.replace(/[^0-9+\-/*\.]/g, '');
    this.mainDisplayText = sanitizedValue;
  }

  private isOperator(key: string): boolean {
    return key === '/' || key === 'x' || key === '-' || key === '+';
  }

  private getLastKey(): string {
    return this.mainDisplayText[this.mainDisplayText.length - 1];
  }

  private calculateResult(result: number, maxLength?: number, errorMessage?: string) {
    this.mainDisplayText = result.toString();
    if (maxLength && this.mainDisplayText.length > maxLength) {
      this.mainDisplayText = 'ERROR';
      this.subDisplayText = errorMessage || '';
    }
  }
}