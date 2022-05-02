const firebaseConfig = {
    apiKey: "AIzaSyAzo8uVRlZmp6LSaDADpqrCalZwPw9zjPU",
    authDomain: "practice-activity-5f926.firebaseapp.com",
    databaseURL: "https://practice-activity-5f926-default-rtdb.firebaseio.com",
    projectId: "practice-activity-5f926",
    storageBucket: "practice-activity-5f926.appspot.com",
    messagingSenderId: "984870621366",
    appId: "1:984870621366:web:58dec35be6ff14cfc2d617",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
   
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
   
        localStorage.setItem("room_name", room_name);
       
        window.location = "kwitter_page.html";
    }
  
  
  function getData() {
    firebase
      .database()
      .ref("/")
      .on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          //Start code
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
          //End code
        });
      });
  }
  getData();
  
  function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
  
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }