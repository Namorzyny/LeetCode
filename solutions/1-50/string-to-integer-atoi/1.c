int myAtoi(char* str) {
    int index = 0;
    int sign = 1;
    int res = 0;
    while (str[index] == ' ') index++;
    if (str[index] == '+') index++;
    else if (str[index] == '-') {
        sign = -1;
        index++;
    }
    while (str[index] >= '0' && str[index] <= '9') {
        if (res < -214748364) {
            if (sign == 1) return 2147483647;
            else return -2147483648;
        }
        if (res == -214748364) {
            if (sign == 1 && str[index] > '7') return 2147483647;
            if (sign == -1 && str[index] > '8') return -2147483648;
        }
        res = res * 10 - (str[index] - 48);
        index++;
    }
    return res * (sign * -1);
}
