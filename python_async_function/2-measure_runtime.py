#!/usr/bin/env python3
"""Module for measuring the runtime of wait_n."""
import time
from typing import List, float
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for wait_n(n, max_delay)
    and returns total_time / n.

    Args:
        n: The number of times to call wait_random.
        max_delay: The maximum delay value.

    Returns:
        float: The average execution time.
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    
    total_time = end_time - start_time
    return total_time / n
