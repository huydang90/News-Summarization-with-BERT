import unittest 
from prepro.utils import _get_ngrams
  
class TestGetNgrams(unittest.TestCase): 
  
    #Return a set of tuples
    def test_get_n_grams(self):   
        ngram_set = {(' ', 'd', 'o'),
                     (' ', 'g', 'o'),
                     ('S', 'u', 'n'),
                     ('d', 'o', 'w'),
                     ('e', 's', ' '),
                     ('g', 'o', 'e'),
                     ('n', ' ', 'g'),
                     ('o', 'e', 's'),
                     ('o', 'w', 'n'),
                     ('s', ' ', 'd'),
                     ('u', 'n', ' ')}      
        self.assertEqual(_get_ngrams(3, "Sun goes down"), ngram_set)

if __name__ == '__main__': 
    unittest.main() 

