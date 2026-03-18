def xor(x, y):
    return (x or y) and not (x and y)

x, y = map(int, input().split())
x = bool(x)
y = bool(y)
result = xor(x, y)
print(1 if result else 0)