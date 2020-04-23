import unittest 
from post_stats import n_grams, has_repeat
  
class TestNgrams(unittest.TestCase): 
  
    #Return list of tuples
    def test_n_grams(self):         
        self.assertEqual(n_grams(['i', 'like', 'pizza', 'and', 'cannot', 'lie'], 3), [('i', 'like', 'pizza'), ('like', 'pizza', 'and'), ('pizza', 'and', 'cannot')])
        self.assertEqual(n_grams(['quiet', 'house', 'nice', 'place'], 2), [('quiet', 'house'), ('house', 'nice')])

    #Return True or False
    def test_has_repeat(self):
        self.assertTrue(has_repeat('abbcde'))
        self.assertTrue(has_repeat('234566'))
        self.assertFalse(has_repeat('abcdefg'))
        self.assertFalse(has_repeat('123456'))

if __name__ == '__main__': 
    unittest.main() 

