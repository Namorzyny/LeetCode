char* toLowerCase(char* str) {
    int diff = 'a' - 'A';
    int index = 0;
    while (str[index] != 0) {
        if (str[index] <= 'Z' && str[index] >= 'A') {
            str[index] += diff;
        }
        index++;
    }
    return str;
}
