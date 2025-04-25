#!/usr/bin/env python3
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n

def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the average execution time per coroutine for wait_n.

    Args:
        n (int): number of times to spawn wait_random
        max_delay (int): maximum delay value for wait_random

    Returns:
        float: total execution time divided by n
    """
    start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end = time.perf_counter()
    total_time = end - start
    return total_time / n
