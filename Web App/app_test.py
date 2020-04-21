import torch
import flask
from flask import Flask, request, render_template
import json
import os
import subprocess

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        sentence = request.json['input_text']
        with open('test_text/bert_input.txt', 'w') as f:
            f.write(str(sentence))
        with open('test_text/bert_input.txt', 'r') as file:
            sentence_processed = file.read().replace('\n', '')
        with open('test_text/bert_input_processed.txt', 'w') as f:
            f.write(str(sentence_processed))
        num_words = request.json['num_words']
        num_beams = request.json['num_beams']
        model = request.json['model']

        if sentence != '':

            if model.lower() == 'bert abstractive':
                p = subprocess.Popen("python train.py -task abs -mode test_text -text_src 'test_text/bert_input_processed.txt' -result_path 'test_text/bert_result' -test_from '../models/bertabs.pt'", shell=True)
                p.wait()
                response = {'response':{'summary': '', 'model': 'bert abstractive'}}

                with open('test_text/bert_result.-1.candidate','r') as f:
                    candidate = f.read()
                    response['response']['summary'] = str(candidate)

            elif model.lower() == 'bert mixed model': 
                p = subprocess.Popen("python train.py -task abs -mode test_text -text_src 'test_text/bert_input_processed.txt' -result_path 'test_text/bert_result' -test_from '../models/bertmix.pt'", shell=True)
                p.wait()
                response = {'response':{'summary': '', 'model': 'bert mixed model'}}

                with open('test_text/bert_result.-1.candidate','r') as f:
                    candidate = f.read()
                    response['response']['summary'] = str(candidate)

            else: 
                with open('test_text/bert_input.txt', 'r') as istr:
                    with open('test_text/bertext_input_processed.txt', 'w') as ostr:
                        sentence_processed = istr.read().replace('. ', '.\n')
                        list = sentence_processed.split(".")
                        sentence_processed = '. [CLS] [SEP] '.join(list)
                        sentence_processed = sentence_processed.replace('\n', '')
                        ostr.write(str(sentence_processed))

                # #         sentence_processed = istr.read()
                # #         list = sentence_processed.split(".")
                # #         list = [' [CLS] [SEP] ' + item for item in list]
                # #         sentence_processed = '.'.join(list)
                #         sentence_processed = sentence_processed.replace('\n', '')
                #         ostr.write(sentence_processed)

                        # sentence_processed = istr.read()
                        # list = sentence_processed.split(".")
                        # list = ['[CLS] [SEP]' + item for item in list]
                        # sentence_processed = '.'.join(list)
                        # sentence_processed = sentence_processed.replace('\n', '')
                        # ostr.write(str(sentence_processed))
                p = subprocess.Popen("python train.py -task ext -mode test_text -text_src 'test_text/bertext_input_processed.txt' -result_path 'test_text/bert_result' -test_from '../models/bertext.pt'", shell=True)
                p.wait()

                response = {'response':{'summary': '', 'model': 'bert extractive'}}

                with open('test_text/bert_result_step-1.candidate','r') as f:
                    candidate = f.read()
                    response['response']['summary'] = str(candidate)
            return flask.jsonify(response)

        else:
            res = dict({'message': 'Empty input'})
            return app.response_class(response=json.dumps(res), status=500, mimetype='application/json')
    except Exception as ex:
        res = dict({'message': str(ex)})
        print(res)
        return app.response_class(response=json.dumps(res), status=500, mimetype='application/json')


if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
