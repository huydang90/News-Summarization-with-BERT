import unittest 
from train import str2bool
  
class TestString2Bool(unittest.TestCase): 
  
    # Returns True or False.  
    def test_str2bool(self):         
        self.assertTrue(str2bool('True')) 
        self.assertTrue(str2bool('YES')) 
        self.assertTrue(str2bool('T')) 
        self.assertTrue(str2bool('Y')) 
        self.assertTrue(str2bool('1')) 
        self.assertFalse(str2bool('No')) 
        self.assertFalse(str2bool('FALSE')) 
        self.assertFalse(str2bool('F')) 
        self.assertFalse(str2bool('N')) 
        self.assertFalse(str2bool('0')) 

if __name__ == '__main__': 
    unittest.main() 

