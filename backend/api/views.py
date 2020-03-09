from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
import re
import os
from nltk.stem import PorterStemmer
stemmer = PorterStemmer()
class Appearance:
    """
    Represents the appearance of a term in a given document, along with the
    frequency of appearances in the same one.
    """
    def __init__(self, docId, frequency):
        self.docId = docId
        self.frequency = frequency  

    def __repr__(self):
        """
        String representation of the Appearance object
        """
        return str(self.__dict__)


class Database:
    """
    In memory database representing the already indexed documents.
    """
    def __init__(self):
        self.db = dict()

    def __repr__(self):
        """
        String representation of the Database object
        """
        return str(self.__dict__)

    def get(self, id):
        return self.db.get(id, None)

    def add(self, document):
        """
        Adds a document to the DB.
        """
        return self.db.update({document['id']: document})

    def remove(self, document):
        """
        Removes document from DB.
        """
        return self.db.pop(document['id'], None)


class InvertedIndex:
    """
    Inverted Index class.
    """
    def __init__(self, db):
        global global_id
        self.index = dict()
        self.db = db
        
    def __repr__(self):
        """
        String representation of the Database object
        """
        return str(self.index)   
    def index_from_invertedlist(self,invertedlist):
        with open(invertedlist,"r") as f:
            #print(20)
            lines=f.read().splitlines()
            for line in lines:
                
                line=line.strip()
                #print(40)
                word=line.split('\t')[0].strip()
                freqs=line.split('\t')[1].strip()
                apps=[]
                #print(60)
                #print(freqs)
                for tf_pair in freqs.split(';'):
                    #print(tf_pair)
                    if ":" not in tf_pair:
                        continue
                    docid=int(tf_pair.split(':')[0])
                    freq=int(tf_pair.split(':')[1])
                    apps.append(Appearance(docid,freq))
                #print(80)
                if word not in self.index:
                    self.index[word]=apps
                else:
                    self.index[word]=self.index[word]+apps

        
    def index_document(self, document):
        """
        Process a given document, save it to the DB and update the index.
        """
        # Remove punctuation from the text.
        clean_text = re.sub(r'[^\w\s]', '', document['text'])
        '''
        terms = re.split(' |\n', clean_text)
    
        appearances_dict = dict() 
        # Dictionary with each term and the frequency it appears in the text.
        for term in terms:
            term = term.lower()
            term_frequency = appearances_dict[term].frequency if term in appearances_dict else 0
            appearances_dict[term] = Appearance(document['id'], term_frequency + 1)

        # Update the inverted index
        update_dict = {key: [appearance]
                       if key not in self.index
                       else self.index[key] + [appearance]
                       for (key, appearance) in appearances_dict.items()}
        self.index.update(update_dict)     
        '''   
        # Add the document into the database
        self.db.add(document)        
        return document

    def lookup_query(self, query):
        """
        Returns the dictionary of terms with their correspondent Appearances. 
        This is a very naive search since it will just split the terms and show
        the documents where they appear.
        """
        #print("dwad")
        #print(self.index)
        try:
            query_words=query.split(" ")
        except Exception as e:
            print(e)
        print(query_words)
        scores=dict()
        for word in query_words:
            word=stemmer.stem(word.strip())
            #print(word)
            if word in self.index:
                

                for x in self.index[word]:
                    #print(x)
                    if x.docId in scores:
                        scores[x.docId]=scores[x.docId]+x.frequency
                    else:
                        scores[x.docId]=x.frequency
                #result.append([x.frequency, x.docId])
                #if count == 10:
                    #break
        return sorted([[scores[key],key] for key in scores], reverse=True)
        


# Global variables of the above created classes for storing inverted-indexes
db = Database()
index = InvertedIndex(db)
global_id = 0


@api_view(['GET', 'POST'])
def clear_indexes(request):
    global global_id, db, index
    global_id = 0
    db = Database()
    index = InvertedIndex(db)
    return Response({"mssg": "All the indexes has been cleared."})

'''
@api_view(['GET', 'POST'])
def indexing_docs(request):
    global global_id, index
    try:
        
        docs = request.data['data']
        docs = docs.split('\n\n')
        print(docs)
        for par in docs:
            document = {
                'id': global_id,
                'text': par
            }
            index.index_document(document)
            global_id = global_id + 1
    except Exception as e:
        return Response({"status": 0})
    return Response({"status": 1})
'''
@api_view(['GET', 'POST'])
def indexing_docs(request):
    global global_id, index
    try:
        path=os.path.join(os.path.join(settings.STATIC_ROOT,"split_50"),"raw")
        invertedlist=os.path.join(settings.STATIC_ROOT,"ilist")
        print(0)
        index.index_from_invertedlist(invertedlist)
        print(100)
        for filename in os.listdir(path):
            #print(filename)
            docid=int(filename.split('.')[0])
            filepath=os.path.join(path,filename)
            #print(filepath)
            with open(filepath,"r") as f:
                doc=f.read()
                #print(docs)
                
                document = {
                'id': docid,
                'text': doc
                 }
                index.index_document(document)
                global_id = global_id + 1
            #break
    except Exception as e:
        return Response({"status": 0})
    return Response({"status": 1})

@api_view(['GET', 'POST'])
def search_word(request):
    global index, db
    res = index.lookup_query(request.data['word'].lower())
    #print(res)
    for x in res:
        x.append(db.db[x[1]]['text'][:250]+"......")
    return Response({"docs": res})


@api_view(['GET', 'POST'])
def get_document(request, id):
    #print(0)
    global db
    if id not in db.db.keys():
        #print("no")
        return Response({"text": ""})
    #print(db.db[id])
    return Response({"text": db.db[id]['text']})


@api_view(['GET'])
def get_all(request):
    global db
    res = [[db.db[x]['id'], db.db[x]['text'][:250]+"......"] for x in db.db.keys()]
    return Response({"docs": res})
