#!/usr/bin/env python3
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with the specified max_delay.

    Args:
        n (int): number of times to spawn wait_random
        max_delay (int): maximum delay value for wait_random

    Returns:
        List[float]: list of all delays in ascending order
    """
    delays = []
    for coro in asyncio.as_completed([wait_random(max_delay) for _ in range(n)]):
        delay = await coro
        delays.append(delay)
    return delays
