import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// Firebase reference point
const db = firestore();
const user = auth().currentUser;
console.log(user.uid);
export const storageUnitRef = db.collection('Units');

/*
  Create:
  It sets up both the shell for home screen but also a
  subcollection for each category.
*/
export const createUnitToFirebase = async ({category, title, icon}) => {
  await db
    .collection('Units')
    .doc(category)
    .set(
      {
        unitsOwner: user.uid,
        unit: firestore.FieldValue.arrayUnion({
          detailUnit: title,
          category: category,
          // timeStamp: firestore.Timestamp.now().seconds, // unable to order the data with array
          icon: icon,
        }),
      },
      {merge: true},
    )
    .then(() => {
      console.log('Unit successfully written!');
    })
    .catch(error => {
      console.error('Error writing unit: ', error);
    });

  await db
    .collection('Units')
    .doc(category)
    .collection('Parts')
    .doc(title)
    .set({
      owner: user.uid,
      items: null,
    })
    .then(() => {
      console.log('parts placholder successfully written!');
    })
    .catch(error => {
      console.error('Error writing parts placholder: ', error);
    });
};

/* Read: can be found at 'CategoriesBox.js' and 'storageUnitScreen' */

/* Remove: can be found at 'itemBox.js' */

/*
  Add:
  For the field ('items') of the document ('Parts') if the data
  not exists update the array with a new object.
*/
export const addPartToFirestore = async ({
  category,
  title,
  partTitle,
  partSubtitle,
}) => {
  await db
    .collection('Units')
    .doc(category) // reference
    .collection('Parts')
    .doc(title) // reference
    .update({
      items: firestore.FieldValue.arrayUnion({
        partTitle: partTitle,
        partSubtitle: partSubtitle,
        // timeStamp: firestore.Timestamp.now().seconds, // unable to order the data with array
        icon: null,
      }),
    })
    .then(() => {
      console.log('The "part" successfully wrote to the array!');
    })
    .catch(error => {
      console.error('Error writing to parts array: ', error);
    });
};
