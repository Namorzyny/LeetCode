bool isStartWith(char* a, char* b) {
    int a_len = strlen(a);
    int b_len = strlen(b);
    if (a_len < b_len) return false;
    int i = 0;
    int t = (b_len + 1) / 2;
    while (i < t) {
        if (a[i] != b[i]) return false;
        if (a[b_len - 1 - i] != b[b_len - 1 - i]) return false;
        i++;
    }
    return true;
}

int strStr(char* haystack, char* needle) {
    int h_len = strlen(haystack);
    int n_len = strlen(needle);
    if (needle[0] == 0) return 0;
    int i = 0;
    while (i <= h_len - n_len) {
        if (haystack[i] == needle[0]) if (isStartWith(&haystack[i], needle)) return i;
        i++;
    }
    return -1;
}
