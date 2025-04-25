#!/usr/bin/env python3
import math


"""a type-annotated function floor which takes a float n as argument and returns the floor of the float"""
def floor(n: float) -> int:
    """
    Return the floor of a float number.

    Args:
        n (float): The number to floor.

    Returns:
        int: The largest integer less than or equal to n.
    """
    return math.floor(n)