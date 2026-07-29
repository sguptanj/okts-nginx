import hashlib
import math
import time

def generate_cpu_load(seconds):

    end = time.time() + seconds

    while time.time() < end:

        for i in range(2, 5000):

            prime = True

            for j in range(2, int(math.sqrt(i)) + 1):

                if i % j == 0:
                    prime = False
                    break

        hashlib.sha256(str(time.time()).encode()).hexdigest()
