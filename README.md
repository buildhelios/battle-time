# Battle Time 🥳


## Assignment
Your assignment is to build an onboarding interface for a space battle game. You will be provided
access to a set fo Invision design files with the layout of the interface. All assets are already
in place in the battle-app package.

Design link - https://craftcreate.invisionapp.com/console/share/3P7SAUVRTHD

### Requirements
- Styling - All styling must be done using styled-jsx. See Index.tsx for an example.
- Layout - All layout should be done using either flex box or grid layouts.
- TypeScript - All code must be written in TypeScript.
- Components - All React components must be functional components.
- Data Driven - Use the Questions API to retrieve the content for the questions displayed. A variable amount questions should be accounted for.  See Index.tsx for an example.
- Response Submissions - The answers selected by the user should be collected and POSTed to the Questions endpoint when the user presses the "Let's rock n' roll" button at the end of onboarding.
- Minimal Decencies - You are not permitted to install any additional npm packages.
- Animations - The transition between questions should be animated
- Responsiveness - The interface must be responsive. The provided Invision design is laid out for desktop. It is your responsibility to adjust to layout for mobile devices. Falling back to a vertically stacked layout is preferred.

## Setup
``` sh
# Create a new branch
git checkout -b exam-{YOUR_NAME}

# Install deps
npm i

# Start NextJS dev server 
# The server runs on port 4200 - http://localhost:4200 
npx nx run battle-app:serve
```

## Project Structure
This project is setup as a mono-repo using NX workspaces. Related functionality is separated into packages 
located in the /packages directory.

``` txt
/packages
  |
  + -- api-func        # An AWS lambda function the implements the Questions API
  |
  + -- battle-app      # A NextJS app where you will build a survey
  |
  + -- battle-app-e2e  # An end-to-end testing project to test the battle-app package
  |
  + -- cdk             # A AWS CDK project used to deploy AWS resources
  |
  + -- common          # A TypeScript library that contains common types and functions

```

## Recommended Extensions
- styled-jsx - Provides css syntax highlighting in styled-jsx blocks
- Nx Console - Allows you to view and run all NX commands

