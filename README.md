<p align="center">
<b><a href="#introduction">Introduction</a></b>
|
<b><a href="#web-application">Web Application</a></b>
|
<b><a href="#save-model-checkpoints">Save Model Checkpoints</a></b>
|
<b><a href="#connect-to-gdrive">Connect to GDrive</a></b>
|
<b><a href="#import-custom-modules">Import Custom Modules</a></b>
|
<b><a href="#work-with-large-data">Work With Large Data</a></b>
|
<b><a href="#dump-data">Dump Data</a></b>
|
<b><a href="#display-image-inline">Display Image Inline</a></b>
|
<b><a href="#download-file">Download File</a></b>
</p>


# Automated News Summarization with BERT-Powered Encoders

## Introduction 

Text  summarization  is  one  of  the  central  challenges  in the  fields  of  Machine  Learning  and  Natural  Language Processing  (NLP).  Bidirectional  Encoder  Representations from Transformers (BERT), a new contextual pre-training method  for  language  representations,  has  been  heralded as the state-of-the-art neural network architecture that can outperform any others in over 11 complex NLP tasks at the time of its creation.  In this paper, we explore the potential of utilizing BERT as the basis for a document level encoder that can capture and generate a representation for text sentences  and  meanings,  ultimately  providing  a  reliable  and accurate automated summarization process of news articles from different international outlets.

## Web Application 

![alt text]()

```console
import os
!cp GDrive_path_to_zip_file Colab_path
os.chdir(Colab_path)
!unzip -qq zip_file
```


```python

model_save_name = 'classifier.pt'
path = f"/content/gdrive/My Drive/{model_save_name}"
model.load_state_dict(torch.load(path))
```


### BERT Models

### Documentation


