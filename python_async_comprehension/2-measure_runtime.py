#!/usr/bin/env python3
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension

"""Run async_comprehension 4 times in parallel and measure the total execution time."""

async def measure_runtime() -> float:
    """
    Executes async_comprehension concurrently 4 times and returns the total runtime.

    Returns:
        float: The time it took to run all tasks in parallel.
    """
    start = time.perf_counter()

    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end = time.perf_counter()
    return end - start
