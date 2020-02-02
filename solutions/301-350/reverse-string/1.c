char* reverseString(char* s) {
    int a = strlen(s);
    int b = a / 2;
    for (int i = 0; i < b; i++) {
        int c = s[i];
        s[i] = s[a - i - 1];
        s[a - i - 1] = c;
    }
    return s;
}
