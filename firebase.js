<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  //https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyBPgFAvvgYWnDNk11kzpJ-tOk_xlOrBG8I",
    authDomain: "unirider-70d80.firebaseapp.com",
    databaseURL: "https://unirider-70d80-default-rtdb.firebaseio.com",
    projectId: "unirider-70d80",
    storageBucket: "unirider-70d80.firebasestorage.app",
    messagingSenderId: "1047983380565",
    appId: "1:1047983380565:web:b65c90acfab35c98971cdc",
    measurementId: "G-GXLQ2WF6E9"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
</script>