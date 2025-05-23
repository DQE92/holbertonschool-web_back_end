#!/usr/bin/env python3
import asyncio
import random

async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a random delay.

    The delay is a random float number between 0 and max_delay (inclusive),
    and the function waits for that duration asynchronously before returning it.

    Args:
        max_delay (int): The maximum number of seconds to wait. Defaults to 10.

    Returns:
        float: The actual delay time waited, as a float.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
