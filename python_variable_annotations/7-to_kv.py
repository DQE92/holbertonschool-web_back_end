#!/usr/bin/env python3
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Return a tuple where the first element is the string key and the second element is
    the square of the value (int or float) as a float.

    Args:
        k (str): The string key.
        v (Union[int, float]): The value to square.

    Returns:
        Tuple[str, float]: A tuple containing the key and the squared value as a float.
    """
    return (k, float(v ** 2))
