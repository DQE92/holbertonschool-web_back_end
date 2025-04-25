#!/usr/bin/env python3
import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random

def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Returns an asyncio.Task that runs wait_random with the given max_delay.

    Args:
        max_delay (int): maximum delay to pass to wait_random

    Returns:
        asyncio.Task: the created asyncio Task
    """
    return asyncio.create_task(wait_random(max_delay))
