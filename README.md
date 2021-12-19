# OOP-Team-profile

**Version 1.0.0**

## Description
The purpose of this project was to create an HTML application in node using the jest test framework to run preliminary tests and npm inquirer package to draw up questions specific to building an organizational team. 

### Significant Changes
We brought back concepts like file system to write the file and produce the output. As well as functions returning a slew of template literal of html text. Bootstrap and icofont were third parties brought in for asethetics as well. 

### Challenges
The biggest challenge was finding a way to create persistence in the application, though we are not using the browser to leverage something like localStorage. The architecture I chose was to push the return of each question object into a global array so regardless of when the user chose to finish building their team the application had access to the final array. From there I was able to deconstruct the values to build my page template accordingly.

### Screenshot
![](/dist/my-team.png)

### Walkthrough Link
https://watch.screencastify.com/v/m2mBEeFmDA8DGnOqkyOM

### Deployed Link
https://nahom-assefa.github.io/OOP-Team-profile/

License and Copyright
© Xander Rapstine, Trilogy Education Services/2U

