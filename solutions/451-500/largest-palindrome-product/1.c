unsigned int reverse(int n) {
    unsigned int res = 0;
    while (n != 0) {
        res = 10 * res + n % 10;
        n = n / 10;
    }
    return res;
}

int largestPalindrome(int n) {
    if (n == 1) return 9;
    int base = pow(10, n);
    long long res;
    for (int i = base - 1; i > 0; i--) {
        res = (long long)i * (long long)base + (long long)reverse(i);
        for (int j = sqrt(res); j < base; j++) {
            if (res % j == 0) if (res / j < base) return res % 1337;
        }
    }
    return -1;
}
