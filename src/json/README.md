# JSON files for tested component libraries
- This directory contains a `template.json` with an example JSON file that can be used to fill in test results for different component libraries.
- Each component library has its own file which in turn contains the JSON file specific to that framework.

## How to add a new component library
- Copy the contents of `template.json` into a new file, rename the file to match the name of the component library and replace the sample data with your test results.
- Fill in the test results (e.g. from [Axe DevTools](https://www.deque.com/axe/devtools/) tests), errors, requirements, manual testing, and any other useful data.

## What is the difference between errors and requirements
- Let's look at missing labels in a component as an example. If the component doesn't support a label for some reason it's an error, but if the component supports labels and the developer needs to remember to add them it's a requirement. Having this distinction helps the tool present actual issues vs. concepts that developers need to pay attention to.
