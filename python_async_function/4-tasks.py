#!/usr/bin/env python3
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random

async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay.

    Returns a list of all the delays (float), in the order they complete.
    
    Args:
        n (int): number of tasks to run
        max_delay (int): maximum delay passed to each task

    Returns:
        List[float]: list of delays in ascending order
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)

    return delays
