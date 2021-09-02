#from flask import Flask , jsonify
#from flask_restful import Resource, Api
#
#app = Flask(__name__)
#api = Api(app)
#
#@app.route('/getmethod/<jsdata>')
#def get_javascript_data(jsdata):
#    return jsdata
#
#@app.route('/postmethod', methods = ['POST'])
#def get_post_javascript_data():
#    jsdata = request.form['javascript_data']
#    return jsdata
#

#from flask import Flask,request
#from flask_cors import CORS, cross_origin
#
#app = Flask(__name__)
#cors = CORS(app)
#app.config['CORS_HEADERS'] = 'Content-Type'
#
#@app.route('/hello', methods=['GET', 'POST'])
#@cross_origin()
#def hellohello():
#    if request.method == "POST":
#        text=request.form['text']
#        return text
#
#if __name__ == "__main__":
#    app.run()
    
from flask import Flask,request
from flask_cors import CORS, cross_origin
import json
import spacy
import urllib.request
from bs4 import BeautifulSoup
  

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

            
@app.route('/home', methods=['POST'])
def home():
    if request.method == "POST":
        def spacyFunction(name):

            nlp = spacy.load("en_core_web_sm")
            punc = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''

            for ele in name:
                if ele in punc:
                    name = name.replace(ele, " ")
            print(name)
            doc = nlp(name)

            x = []
            str = ""
            for token in doc:
                if token.pos_=="PROPN":
                    x.append(token)
            
            for i in range(len(x)):
                str += "-"
                str += x[i].text
            return str
        
        url = request.form['text']
        html = urllib.request.urlopen(url)
        htmlParse = BeautifulSoup(html, 'html.parser')
        content = ""
        for para in htmlParse.find_all("p"):
            content += para.get_text()
        print(content)

        ans = spacyFunction(content)
        print(ans)
        return ans
        
if __name__ =="__main__":
    app.run(debug = True)
    

