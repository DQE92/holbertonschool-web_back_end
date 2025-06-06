#!/usr/bin/env python3
"""
Simple pagination module
"""


import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    
    
    """
    Returns a tuple of size two containing a start index and an end index
    corresponding to the range of indexes to return in a list for those
    particular pagination parameters.
    
    Args:
        page (int): The page number (1-indexed)
        page_size (int): The number of items per page
        
    Returns:
        tuple: A tuple containing the start and end indexes
    """
    
    
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    
    return (start_index, end_index)


class Server:
    
    
    """Server class to paginate a database of popular baby names.
    """
    
    
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        
        
        """Cached dataset
        """
        
        
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        
        
        """
        Returns a page of the dataset based on pagination parameters.
        
        Args:
            page (int, optional): The page number, defaults to 1
            page_size (int, optional): The page size, defaults to 10
            
        Returns:
            List[List]: The paginated data
        """
        
        
        assert isinstance(page, int) and page > 0, "Page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, "Page size must be a positive integer"
        
        dataset = self.dataset()
        
        if not dataset:
            return []
        
        start_idx, end_idx = index_range(page, page_size)
        
        if start_idx >= len(dataset):
            return []
        
        return dataset[start_idx:end_idx]
