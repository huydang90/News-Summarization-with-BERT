
import unittest 
from cal_rouge import chunks
  
class TestChunks(unittest.TestCase): 
  
    #Return generator object
    def test_chunks(self): 
    	for chunk in chunks('lie', 3):         
        	self.assertEqual(chunk, 'lie')

if __name__ == '__main__': 
    unittest.main() 
