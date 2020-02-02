bool isMatch(char* s, char* p) {
    int ps = 0;
    int pp = 0;
    while (p[pp] != 0) {
        if (p[pp + 1] == '*') {
            if (isMatch(&s[ps], &p[pp + 2])) return true;
            while ((p[pp] == '.' || s[ps] == p[pp]) && s[ps] != 0) {
                if (isMatch(&s[ps + 1], &p[pp + 2])) return true;
                ps++;
            }
            return false;
        } else if ((p[pp] == '.' || p[pp] == s[ps]) && s[ps] != 0) {
            ps++;
            pp++;
        } else return false;
    }
    return (s[ps] == 0 && p[pp] == 0);
}
