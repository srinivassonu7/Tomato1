from django.shortcuts import render

# Create your views here.
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.files.storage import FileSystemStorage

import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image 

#from Diseases import CATEGORIES;
#import Diseases,Remidies
MODEL_PATH ='app/leaf_model_10_96.h5'
model = load_model(MODEL_PATH)
CATEGORIES=['Tomato Bacterial spot',      
            'Tomato Early blight',
            'Tomato Late blight',
            'Tomato Leaf Mold',
            'Tomato Septoria leaf spot',
            'Tomato Spider mites Two-spotted spider mite',
            'Tomato Target Spot',
            'Tomato Tomato Yellow Leaf Curl Virus',
            'Tomato Tomato mosaic virus',
            'Tomato healthy']

Remedy=[
#1)bacterial spot:
"Bleach treatment:\n"
"Seed treatment with sodium hypochlorite (for example, Clorox) is effective in reducing bacterial populations on seed surfaces. However, bacteria inside the seeds are little affected by this treatment.\n"

"Hot water treatment:"
"Seed treatment with hot water is effective in reducing bacterial populations on the surface and inside the seeds. However, seed germination may be jeopardized by heat treatment more than by properly applied sodium hypochlorite treatment."
,
#2)early blight:
"The first is a modern version of the classic Bordeaux Mixture, Bonide® Copper Fungicide Dust.\n"
"The original Bordeaux mixture contained copper sulfate and lime and could sometimes be toxic to plants.\n"
"Use either diluted as a spray, or dust the powder onto the foliage, every three days.\n",


#3)late blight:

"Another option is the biofungicide Serenade."
"While the copper fungicide dust will kill existing infections, Serenade® decreases the likelihood that any remaining fungi will spread throughout your crop.\n"

"Use a copper-based fungicide (mix 2 ounces of fungicide with a gallon of water) every 6 or 7 days following a watering or heavy rain. Try to apply fungicide when at least 12 hours of dry weather is ahead, so that the treatment has time to kill the fungus."
,
#4)Leaf mold:

"When treating tomato plants with fungicide, be sure to cover all areas of the plant that are above the soil, especially the underside of leaves, where the disease often forms. Calcium chloride-based sprays are recommended for treating leaf mold issues. Organic fungicide options are also available.\n"

"Use drip irrigation and avoid watering foliage. Use a stake, strings, or prune the plant to keep it upstanding and increase airflow in and around it. Remove and destroy (burn) all plants debris after the harvest."
,
#5)septoria leaf spot:

"Removing infected leaves\n"
 "Remove infected leaves immediately, and be sure to wash your hands and pruners thoroughly before working with uninfected plants.\n"

"Consider organic fungicide options\n"
 "Fungicides containing either copper or potassium bicarbonate will help prevent the spreading of the disease.\n"

"Consider chemical fungicides.\n"
 "While chemical options are not ideal, they may be the only option for controlling advanced infections. One of the least toxic and most effective is chlorothalonil (sold under the names Fungonil and Daconil)."
,
#6)Spider_mites Two-spotted_spider_mite:
"Pest-control materials recommended for managing spider mites outdoors include abamectin (Avid), bifenthrin (Talstar), dicofol (Kelthane), hexythiazox (Hexygon), insecticidal soap, and summer oil. Be sure to concentrate sprays on leaf undersides.\n"

"Rubbing alcohol: The rubbing alcohol you have around the house also can kill spider mites. Soak cotton balls in rubbing alcohol and wipe across the foliage of infested houseplants. Let either the dish soap or rubbing alcohol sit on the plants a few hours, and then rinse the leaves thoroughly with water."
,
#7)Target_Spot:
"Remove and burn the lower leaves as soon as the disease is seen, especially after the lower fruit trusses have been picked. Keep plots free from weeds, as some may be hosts of the fungus. Do not use overhead irrigation; otherwise, it will create conditions for spore production and infection."
,
#8)Tomato_Yellow_Leaf_Curl_Virus:
"Select varieties less prone to leaf curl.\n"
"Maintain adequate soil moisture.\n"
"Avoid excessive fertilizer, especially nitrogen.\n"
"Prune indeterminate varieties conservatively.\n"
"Avoid high temperatures by shading plants, when logistically possible.\n"
,
#9)Tomato_mosaic_virus:
"Remove all infected plants and destroy them. Do NOT put them in the compost pile, as the virus may persist in infected plant matter. Burn infected plants or throw them out with the garbage.\n"
"Monitor the rest of your plants closely, especially those that were located near infected plants.\n"
"Disinfect gardening tools after every use. Keep a bottle of a weak bleach solution or other antiviral disinfectant to wipe your tools down with.\n"

"Mosaic viruses are mostly spread by insects, especially aphids and leafhoppers. You can try covering your plants with a floating row cover or aluminum foil mulches to prevent these insects from infecting your plants."
,
#10)healthy tomato:
"Have a good day!"
]

def prediction(img_path,mdl):
    img = image.load_img(img_path, target_size=(256, 256))
    x = image.img_to_array(img)
    x = x/255
    x = np.expand_dims(x, axis=0)
    preds = mdl.predict(x)
    print(preds)
    preds = np.argmax(preds, axis=1)
    return (CATEGORIES[int(preds)],Remedy[int(preds)])

@api_view(['POST'])
def Leaf_Disease(request):
    if request.method == 'POST':
        myfile = request.FILES['image']
        fs = FileSystemStorage()
        filename = fs.save("1.JPG", myfile)
        print(myfile.name)
        uploaded_file_url ="."+fs.url(filename)
        dname,rname=prediction(uploaded_file_url,model)
        print(dname,rname)
        return Response({'val1':dname,'val2':rname}, status=status.HTTP_201_CREATED)

    else:
        print('error')
        return Response('error', status=status.HTTP_400_BAD_REQUEST)