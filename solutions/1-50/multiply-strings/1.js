/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
    return (new BigInt(num1)).mul(new BigInt(num2)).toString();
};

class BigInt {
    constructor(s) {
        this.data = [];
        s = '0'.repeat(15 - s.length % 15) + s;
        for (let i = 0; i < s.length; i += 15) {
            this.data.splice(0, 0, Number(s.substr(i, 15)));
        }
        if (this.data[this.data.length - 1] === 0) this.data.pop();
    }

    add(bigInt) {
        const len = Math.max(this.data.length, bigInt.data.length);
        let carry = 0;
        for (let i = 0; i < len; i++) {
            if (this.data[i] === undefined) this.data[i] = bigInt.data[i] + carry;
            else this.data[i] += (bigInt.data[i] || 0) + carry;
            carry = 0;
            if (this.data[i] > 999999999999999) {
                this.data[i] -= 1000000000000000;
                carry = 1;
            }
        }
        if (carry === 1) this.data.push(1);
        return this;
    }

    double() {
        let carry = 0;
        for (let i = 0; i < this.data.length; i++) {
            this.data[i] += this.data[i] + carry;
            carry = 0;
            if (this.data[i] > 999999999999999) {
                this.data[i] -= 1000000000000000;
                carry = 1;
            }
        }
        if (carry === 1) this.data.push(1);
        return this;
    }

    half() {
        let remainder = 0;
        for (let i = this.data.length - 1; i >= 0; i--) {
            if (remainder) this.data[i] += 1000000000000000;
            remainder = this.data[i] % 2;
            this.data[i] = Math.floor(this.data[i] / 2);
        }
        if (this.data[this.data.length - 1] === 0) this.data.pop();
        return this;
    }

    isZero() {
        return this.data.length === 0;
    }

    copy() {
        return {data: this.data.concat([]), __proto__: BigInt.prototype};
    }

    isOdd() {
        return this.data[0] % 2 === 1;
    }

    mul(bigInt) {
        const result = new BigInt('0');
        const curr = this.copy();
        const add = bigInt.copy();
        while (!curr.isZero()) {
            if (curr.isOdd()) result.add(add);
            curr.half();
            add.double();
        }
        return result;
    }

    toString() {
        return this.isZero() ? '0' : this.data.map((n, i) => {
            const s = `${n}`;
            if (i === this.data.length - 1) return s;
            return '0'.repeat(15 - s.length) + s;
        }).reduce((total, s) => s + total, '');
    }
}
