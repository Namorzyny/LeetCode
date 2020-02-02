bool isNumber(char* s) {
    int i = 0;
    while (s[i] == ' ') i++;
    if (s[i] == '+' || s[i] == '-') i++;
    int check = i;
    while (s[i] >= '0' && s[i] <= '9') i++;
    if (s[i] == '.') {
        i++;
        check++;
    }
    while (s[i] >= '0' && s[i] <= '9') i++;
    if (check == i) return false;
    if (s[i] == 'e') {
        i++;
        if (s[i] == '+' || s[i] == '-') i++;
        check = i;
        while (s[i] >= '0' && s[i] <= '9') i++;
        if (check == i) return false;
    }
    while (s[i] == ' ') i++;
    if (s[i] != 0) return false;
    return true;
}
