#!/usr/bin/env python3
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Return the sum of a list containing integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]): A list of numbers (integers and/or floats).

    Returns:
        float: The sum of all values in the list as a float.
    """
    return sum(mxd_lst)
