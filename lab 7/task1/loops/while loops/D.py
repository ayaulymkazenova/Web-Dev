n = int(input())

if n == 1:
    print("YES")
else:
    while n > 1:
        if n % 2 != 0:
            print("NO")
            break
        n //= 2
    else:
        print("YES")