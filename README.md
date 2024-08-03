# project6
repository for project 6 

Robby Kulak COP3813 |
Z-number: Z23691656


Project 6 PART 1: 

  - LAB 15.18: 
      In this lab, we will explore how pug templates can be used to create dynamic webpages by replacing variables in a template file with specific values. At the most basic level, pug utilizes a syntactically simpler but indentation dependent structure that allows the creation of templates that are rendered into full html. To produce dynamic webpages, JavaScript can then be integrated into the pug templates, creating content that is rendered dynamically based on the value of variables being utilized. To build familiarity with the use of pug templates, you will create four different pug templates to match the output html descriptions:



1. template1.pug - This template should demonstrate basic HTML syntax, including lists, images with attributes, tables, and sections. The image below shows what your rendered html should look like after the pug template rendered. Use basic pug syntax to render the html elements.





2. template2.pug - This template should loop through an array of states and their populations to create a list. The array of states and populations is defined in the index.js file, use the data passed to the pug template to dynamically render the list using a pug loop. The image below shows what the rendered html should look like





3. template3.pug - This template should use a mixin with a block to render a few statements. The image below shows what the rendered html should look like. A pug skeleton is given in template3.pug. 





4. template4.pug - This template should use a mixin personCard to create a function that renders a person profile card with specific attributes. The data for the people is defined in index.js. Use the Skelton provided to complete the pug template, the image below shows what the rendered html should look like.

Create the required pug templates, templates 3 and 4 already have code skeletons. Do not modify the index.js file, only the templates. When you run your program, you will get an output of html, which will be compared against an expected html output for automatic grading. The program will not automatically render your html, to render your produced html copy the code and paste it into the code cell below this terminal, which will then render your webpage. When automatically grading, the program will clearly show you the difference between your produced html and the expected html, which you can use to adjust your pug templates. 


- LAB 17.10:
    Help 0.1% for the Planet fix their website and make an impact!
0.1% for the planet is a new environmental organization that is making a website to share their message! However, they were a bit too eager to get the word out quickly and ended up making an ugly but more importantly poorly accessible website. Help fix their website using the guidelines below:

Ensure Sufficient Contrast:

The background color #00FF00 (bright green) and text color #000 (black) do not provide sufficient contrast.
Fix: Choose a background and text color combination that provides a contrast ratio of at least 4.5:1 for normal text.
 WebAIM Contrast Checker 
Avoid Using Inaccessible Fonts:

The font 'Comic Sans MS' is not a widely accessible font.
Fix: Use more readable fonts like Arial or Verdana.
Provide Text Alternatives for Images:

The image tag <img src="environment.jpg"> does not have an alt attribute.
Fix: Add an alt attribute to provide a text alternative for the image.
Use Semantic HTML Elements:

Avoid using non-semantic elements and ensure proper use of headings and structural elements.
Fix: Ensure headings are used in a logical order (e.g., h1, h2, etc.).
Ensure All Form Fields Are Labeled:

The form fields should have associated labels.
Fix: Ensure all form inputs have corresponding <label> elements with for attributes matching the id of the input.
Keyboard Navigation:

Ensure all interactive elements (links, buttons) are reachable via keyboard.
Fix: Add :focus styles in CSS to ensure focus is visible.
Design proportions:

Ensure all components of the webpage can be read and accessed  
Fix: Correctly format any images, textual elements, and footers that block the webpage (hint footer is fixed)
Descriptive Link Text:

Ensure link text is descriptive.
Fix: Use descriptive link text that indicates the purpose of the link, e.g., "Join our environmental protection efforts".
Use ARIA Roles and Landmarks:
Use ARIA roles and landmarks for better accessibility.
Fix: Add ARIA role of link to contact span

Project 6 PART 2: 

Link this repository within the text entry of this zone. Include your name and Z number in the Readme and also on the footer of your webpage - index.html.

The goal of this lab assignment is to understand and implement server-side validation of HTML forms using node.js. In this assignment you will be given a template (here: p6-template.zip Download p6-template.zip), which includes an HTML form and JavaScript skeleton to validate the inputs before processing the form data. You will be converting this code to work on the server-side using node.js. Node allows the use of JavaScript to be used as a server side language for validating the post requests of the form being submitted. Modify the provided code to do the following server-side tasks:

Validate each field according to the specified rules.
Display error messages if the validation fails.
Create a <p> tag with your messages with class error. 
Use the following error messages stored to display:
"Name is required.", "Email is required.", "Password is required."
"Name must be alphabetic and between 2 and 50 characters."
"Password must be at least 6 characters long."
"Invalid email format."
"Age must be a number between 1 and 120."
Display a success message if the validation passes.
Create a <p> tag with your message with class success.
Validation Rules

Name: Required, must be alphabetic and between 2 and 50 characters.
Email: Required, must be a valid email format.
Password: Required, must be at least 6 characters long.
Age: Optional, if provided, must be a number between 1 and 120.
