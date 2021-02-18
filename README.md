# An Scéalaí

https://www.abair.tcd.ie/scealai/

### What is An Scéalaí?
###### *Taken from our User Guide*
An Scéalaí is an online learning platform for students of the Irish language. It provides an environment in which users can write and correct Irish texts, or stories. One of An Scéalaí ’s unique features is the ability to listen back to a computer-generated voice reading your story as Gaeilge. As well as this, users can run their story through a grammar-checker that highlights any spelling mistakes or other grammatical errors found in the text. More detail on these technologies can be found at the Technology tab on our website.

An Scéalaí also serves as a research project by Trinity College Dublin, investigating the effectiveness of different language-learning methods. We invite you to try using audio check as well as grammar check to correct spelling and grammar mistakes in your stories. This will provide us with useful data to help design language-learning resources in the future!

You can contact us with any queries/feedback at scealai.info@gmail.com

## Setting Up
To dowload the code:
```bash
$ git clone https://github.com/OisinNolan/an-scealai.git
$ cd an-scealai
```

To install Node dependencies:
```bash
$ npm install
```

## Running the App
1) In the project root folder, /an-scealai, run the following command to start the Angular frontend server:
```bash
$ npm run frontend
```

2) In another terminal window, run the following command to start the MongoDB backend:
```bash
$ npm run backend
```

3) Navigate to http://localhost:4200/.