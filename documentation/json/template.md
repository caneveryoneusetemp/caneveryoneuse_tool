# How do I use the template
Each library has its own template file.

## Structure
The following properties are in use:

* **name**: the name of the UI component library, for example 'Angular Material'.
* **slug**: Each library has an overview page that lists all components. The slug is part of the URL, make sure it follows the naming conventions of URLs.
* **version**: the version of the UI library.
* **preview_link**: to test the component, we need a standalone implementation. The link leads to preview of the component of the library.
* **Testresults**: **Axe**, **manual_testing**: we use axe DevTools for automated testing and manual testing. The results need to be put in the respective objects.
  * **total_issues**: number of accessibility issues the component has
  * **errors** and *requirements*: the property errors contains the violations with WCAG that are caused by the components. The property requirements contains issues that can be created when integrating the component. For example, if you add an input, it must have a label.
    *  **error_type**: the name of the WCAG criterion that is directly violated by the component. For example, '2.1.1 Keyboard'
    *  **description**: describe the error and why it conflicts to the criterion
    *  **fix**: provide a solution for resolving the issue
    *  **wcag**: Links to the WCAG version and URL of success criterion
      * **version**: version of WCAG, for example 2.2
      * **success_criteria**: the link to the success criterion for further information

## Feedback
The template is work in progress. If you have improvements, please share with the group.
