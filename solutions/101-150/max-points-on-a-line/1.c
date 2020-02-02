/**
 * Definition for a point.
 * struct Point {
 *     int x;
 *     int y;
 * }
 */

struct Line {
    struct Point* a;
    struct Point* b;
};

bool isOnLine(struct Point* p, struct Line* l) {
    return (long long)(p->x - l->a->x) * (long long)(l->b->y - l->a->y) == (long long)(p->y - l->a->y) * (long long)(l->b->x - l->a->x);
}

bool isSameLine(struct Line* a, struct Line* b) {
    return isOnLine(a->a, b) && isOnLine(a->b, b);
}

bool canCreateLine(struct Point* a, struct Point* b) {
    return !(a->x == b->x && a->y == b->y);
}

int maxPoints(struct Point* points, int pointsSize) {
    int pointCount = 1;
    struct Line lineList[10000];
    int lineCount = 0;
    for (int i = 1; i < pointsSize; i++) {
        for (int j = 0; j < pointCount; j++) {
            if (canCreateLine(&points[i], &points[j])) {
                struct Line newLine;
                newLine.a = &points[i];
                newLine.b = &points[j];
                bool alreadyHave = false;
                for (int k = 0; k < lineCount; k++) {
                    struct Line* line = &lineList[k];
                    alreadyHave = alreadyHave || isSameLine(&newLine, line);
                }
                if (!alreadyHave) {
                    lineList[lineCount] = newLine;
                    lineCount++;
                }
            }
        }
        pointCount++;
    }
    if (lineCount == 0) return pointsSize;
    int max = 0;
    for (int i = 0; i < lineCount; i++) {
        int count = 0;
        for (int j = 0; j < pointCount; j++) {
            if (isOnLine(&points[j], &lineList[i])) count++;
        }
        if (count > max) max = count;
    }
    return max;
}
