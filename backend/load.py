import hashlib
import math
import time

def generate_cpu_load(seconds):

    end = time.time() + seconds

    while time.time() < end:

        for i in range(2, 2000):

            limit = int(math.sqrt(i))

            for j in range(2, limit + 1):
                if i % j == 0:
                    break

        hashlib.sha256(str(time.time()).encode()).digest()
