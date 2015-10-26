# Phonebook - A simple Meteor App

The project is about a simple application which enables user to insert new contacts, edit existing one's and also view and delete individual contacts

The app is built completely on MeteorJS. The following steps are to be followed to run the app in Linux environment:

1. Clone the repository -> git clone 
2. Install meteor JS -> curl https://install.meteor.com/ | sh
3. Go to the location where the repository was cloned -> cd location_to_repo
4. Install cordova plugin for in-app browser -> meteor add cordova:org.apache.cordova.inappbrowser@0.5.4
5. Type in this command to run it in a web browser -> meteor run
6. To run it on android platform, first download the sdk -> meteor install-sdk android
7. Next add the android platform -> meteor add-platform android
8. To run it in an emulator type -> meteor run android
9. To run it in a device -> meteor run android-device

If you get an error like this one:
  
  /phonebook/.meteor/local/cordova-build/platforms/android/src/org/apache/cordova/inappbrowser/InAppBrowser.java:120:
   error: cannot find symbol
   || Config.isUrlWhiteListed(url)) {
   
go to /phonebook/.meteor/local/cordova-build/platforms/android/src/org/apache/cordova/inappbrowser/InAppBrowser.java in your code editor and remove the following part:
  
   || Config.isUrlWhiteListed(url)

Now again perform step 9 and you shouldn't get the error.
