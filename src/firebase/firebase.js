import * as firebase from 'firebase';

const config = {
  /*apiKey: "AIzaSyDWexFRAz0DeYXYkJOjqIUTEz8SarYB-mQ",
    authDomain: "expensify2-8327a.firebaseapp.com",
    databaseURL: "https://expensify2-8327a.firebaseio.com",
    projectId: "expensify2-8327a",
    storageBucket: "expensify2-8327a.appspot.com",
    messagingSenderId: "95066934944"*/


    apiKey: "AIzaSyBrT3Bvh-dYEnB-ul4DL97qsQZzyen8IAU",
    authDomain: "expensify-f041b.firebaseapp.com",
    databaseURL: "https://expensify-f041b.firebaseio.com",
    projectId: "expensify-f041b",
    storageBucket: "expensify-f041b.appspot.com",
    messagingSenderId: "104835101759",


  /*"type": "service_account",
  "project_id": "expensify-f041b",
  "private_key_id": "8fdb281070c8d70a077e4fcc5fbb429c5ad6cea5",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDcusKuSVkvaTNh\n94xIm6xBB6aKPWgrskf56xJzvR00/fwx/w4nOP3ikloANpPqzYbtDSP8GHWwLMVn\nWvyGcMRDQXbD78VXqeifSWUFxruYws56sZ2Eie8Gdlkc/2K/8zydWBjKqevu/OH+\nM+k5QCqXF1AHkZVz7WQ4HgNd6B/t5KEGwlQUIosX3YypS8sls5vOcWeJrUU5b91L\ngp6qn7r8IZgqdrum/TLqL2ZftsAdeiVFviJ0XBOjVY8p5vlq/MG1XNgCUVjLMF3c\nVEJA82KKloRQXlCEpgoT9KMWq4eCHCoNcugaqVO8u5OYrgrVjJBhJUh8F7DbMfOm\n0tPFRAp5AgMBAAECggEANuUvw760MolcYRH6zpgAyA+KCLlq7esh4XLoHOa8m9BK\n53hCYdjXs4CoZ4MrWGsTEmOBPpIqusz3r1O+mAT1mrBuRB6emsXD99F+EWiygTR5\nu6Puw+a2DopicUbGnWx197/QMp798WrtHZZ1e2qM7RS8L5WycKlqklZMig9P2Y7b\nRwOjeJVbj5JJGVkYkfJV5VRe2wq084KHa0xQEHsIsr4m2ngjmCWZhwfKq8BzRGgE\n0JM13wdQfRPCrPmLzdQQpzSJD+tXk5YrKavkcguLwmIDs3gQI63Ew0rxqfEhkP2g\ndA8Hz/H2EVUo56JOqNOdVnMLhiBo0DEBt2xigrEzfQKBgQD+VHTAUR1r76d3JKvY\nwYRB+r0fEGPzkBbI1PB0NBbmK1/5rwxvRFKbpOyuhW4Iv9roRT6pU+1s/3oBuXgP\nkDHCc483OOzOaYkr33DBnRPMs+XxDyKXphanSJHqkDszfzS79zwRt5c0oGJy6mmT\n5jjZLGkP9I0vXYiO91NURp1E7wKBgQDeLdH1pCDHT9NPp0042Zeo/i+jkJ4OOuyA\nis4coPzSJhuTknDo6WjFJ64nvLTzCXJMbp2fYklfDzkmvRfXGGFQ+UCETb60JWgz\nU04Nr3L+ZdeawUKztLw0jboAnqVMVDalhRgqKm/PfW0mUpXZ2iqD1D6Jtq1gCtWb\nxvI8JOS3FwKBgGRj1/X1zsRFQ/g+jGqx8E/O9onlgV6p2KSLkSJ9UTCnnGnFVAYz\nlNwFHLvCxW1EtdcLRjG2hDiLG5DEsgSKqWmVDcoBeU/8zn135F04cJFTzYb6r2/m\nynhbp+VL62JnatxrOdXQfynxyQqNRwFvVa873XjD0lsI85djPww8F2YXAoGBALjQ\n/LqNUQb7DBhSXxZPSq005IP3JMNJmLpEvLdr42MceAwF4Q6eOpzmKSS9APi6fu29\nhjizFb2ReEUVPuOaUDl/XX+w/FX2V/t57I/NxqaAKR1+bfH3AiflTTh+v5oC44JE\neJl6u4+qEkWypRyXMo5+25bK8uXVnWL71zzYo7j5AoGBAOgcRgRhCsXzg3HFJfZ2\n/9N8+uuQxoTaP1lapJFx/bArBu1SZMl9LpkDqh/E9fdTcGhgixr9GIrh8pYrGQPa\nzJBfo3YHMqVy2awVRc2+GgAIzI0tlDD/m/C2x6aiqW/CWlF2WrSueugag6sT3Ch5\nsBvlXix4IRvXSadoX0Bvfr5x\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-eulga@expensify-f041b.iam.gserviceaccount.com",
  "client_id": "107736842375210025183",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-eulga%40expensify-f041b.iam.gserviceaccount.com",
  "databaseURL": "https://expensify-f041b.firebaseio.com",*/
};

 firebase.initializeApp(config);
  const database=firebase.database();
  const google_provider=new firebase.auth.GoogleAuthProvider();
export {firebase,google_provider,database as default}; 