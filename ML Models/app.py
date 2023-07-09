# Flask implementation of the ML model

import os
import pickle
import numpy as np
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Load the model
model = pickle.load(open('logistic_regression_model', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    
    '''
    int_features = [int(x) for x in request.form.values()] # form is the name of the form in index.html
    # Values are the values of the form. How to get the values of the form? 
    # By using the request.form.values() function
    final_features = [np.array(int_features)]
    prediction = model.predict_proba(final_features) 
    output = round(prediction[0][1], 2) 
    return render_template('index.html', prediction_text='Probability of having the disease is {}'.format(output))


if __name__ == "__main__":
    app.run(debug=True)