
x = int(input())

result = []

for i in range(1, x + 1):
    if x % i == 0:
        result.append(i)

print(' '.join(map(str, result)))
