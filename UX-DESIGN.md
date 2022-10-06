# User Experience Design

This repository contains instructions and files for two assignments that together comprise the user experience design phase of a web app.

Replace the contents of this file with the completed assignments, as described in:

- [app map & wireframe instructions](instructions-0a-app-map-wireframes.md).
- [prototype instructions](instructions-0b-prototyping.md)

# App Prototype
[Link to the Clickable Prototype](https://www.figma.com/proto/NUrsgWWd7bYRWXnVhkWUUK/Add-Ext.-Calendar-Wireframe?node-id=44%3A78&scaling=scale-down&page-id=20%3A60&starting-point-node-id=44%3A78)

![App Prototype](ux-design/Prototype%20Screenshot.png)

This is the clickable / tappable mobile prototype for the Minimum Viable Product (MVP) of our application. Through this prototype, we have connected the wireframes that we created in Figma for the pages of our application. The prototype enables users to get a better understanding of how the different pages of our app are interconnected, and how they're accessed from within one another. It also includes some overlays that appear when you try to add an event to the calendar, select a month etc. 

# App Map 

![App Map](wireframes/AppMap.png)

The app map depicts major pages that users can access. It demonstrates the parent/child relation of each page. 


# Sign In / Login 
![Login](wireframes/Login.png)

# Homepage (Personal Calendar) 

![Homepage](wireframes/Homepage.png)

The homepage will be the user's personal calendar, where they can view their upcoming schedules.


# Adding events to Personal Calendar 

![Add Events to PC](wireframes/personalCalendar.png)

- When a user decides to add a new event on their personal calendar they will tap a date on the calendar on the hopepage, and then be shown the schedule of the day with the bottom portion redirects to create new event.


# User Profile 

![Profile](wireframes/Profile.png)

- The Profile page shows a User's profile information, as well as allowing them to navigate to their Account Settings or Add External Calendars to their profile.

- This page is a navbar item, and will be always be accessible from the HomePage and any of the HomePages first children, see AppMap for more details.

# Look Up Profile 

![Look Up](wireframes/LookUp.png)

- The Look Up page allows a user to look for users and groups. For the users and groups, one can either view their public profile, or request to add friend or join group.

- This page is a navbar item, and will be always be accessible from the HomePage and any of the HomePages first children, see AppMap for more details.

# Profile Calendar

![Profile Calendar](wireframes/Profile%20Calendar.png)

- The Profile Calendar page allows a user to look at the public calendar of someone's profile.

- A user can click on a date in the calendar to open the page for the date as follows:

# Profile Calendar (Date Clicked)

![Profile Calendar (Date Clicked)](wireframes/Profile%20Calendar%20(Date%20Clicked).png)

- This page allows a user to view the schedule for a date in another user's public calendar.

# Friends 

![Friends](wireframes/Friends.png)

- The Friends page shows a users friend list, allowing them to quickly find out who they are connected to and view their friends private profile.

- This page is a navbar item, and will be always be accessible from the HomePage and any of the HomePages first children, see AppMap for more details.

# Friend Calendar

![Friend Calendar](wireframes/Friend%20Calendar.png)

- The Friend Calendar page allows a user to look at the calendar of someone they're friends with profile.

- A user can click on a date in the calendar to open the page for the date as follows:

# Friend Calendar (Date Clicked)

![Friend Calendar (Date Clicked)](wireframes/Friend%20Calendar%20(Date%20Clicked).png)

- This page allows a user to view the schedule for a date in a friend's calendar.
- Through this page, a user can also create an event for an activity with their friend for the given date.

# Groups

![Groups](wireframes/Groups.png)

- The Groups page shows a users group list, allowing them to quickly find out which groups they are in and to and view their group private profile. 

- The Groups page also contains a 'Create Group' button allowing them to navigate to the Create Groups page easily. 

- This page is a navbar item, and will be always be accessible from the HomePage and any of the HomePages first children, see AppMap for more details.

# Group Calendar

![Group Calendar](wireframes/Group%20Calendar.png)

- The Group Calendar page allows a user to look at the calendar of a group they're part of.

- A user can click on a date in the calendar to open the page for the date as follows:

# Group Calendar (Date Clicked)

![Group Calendar (Date Clicked)](wireframes/Group%20Calendar%20(Date%20Clicked).png)

- This page allows a user to view the schedule for a date in a group's calendar.
- Through this page, a user can also create an event for an activity with their group for the given date.

# Create Group

![Create Group](wireframes/Create%20Group%20Wireframe.png)

- This page enables users to create groups, add a profile picture for the group and invite their friends to the group.

# Events

![Events](wireframes/Events.png)

- The Events page shows a list of all public events, allowing a user to either view detailed event information, or request to join event.

- The Events page also contains a 'Create Event' button allowing them to navigate to the Create Events page easily.

- This page is a navbar item, and will be always be accessible from the HomePage and any of the HomePages first children, see AppMap for more details.

![EventInfo](wireframes/EventViewAllInfo.png)

- This information page displays the full information for a single event, and can be navigated to only from the events feed page. 

- A user can either go back to the main events page, or if interested after viewing all relevant information, can request to join event.

# Create Event Page

![Create Event Page](wireframes/Create%20Event%20Wireframe.png)

- This page allows users to create events for a specified date. They can also invite selected friends for the event from this page.

# Add External Calendar

![Add External Calendar](wireframes/Add%20Ext.%20Calendar.png)

- This page enables users to import `.ical` calendars to the app to either add events from the calendar or replace current personal calendar.

- This page has the following options:
  - Event Addition:
  1. Add all event from the imported calendar
  2. Add events from specified months from the imported calendar
   - Calendar Merging / Replacement:
  1. Add events from imported calendar to existing personal calendar
  2. Replace existing personal calendar.

You may also notice that clicking the month drop-down menu button brings up the select month overlay, which is as follows:

# Select Month Overlay

![Month Selection Overlay](wireframes/Month%20Selection%20Overlay.png)

- This page enables users to either select a month of the year or return to the calling page
- Useful for creating events

# Create Event Overlay

![Create Event Overlay](wireframes/Create%20Event%20Overlay.png)

- This overlay enables users to create an event for a given date from their own home page (i.e., user profile calendar)

# Account Settings

![Account Settings](wireframes/Account%20Settings.png)

- This page enables users to change their account settings (i.e., make profile calendar public or private, edit bio and change profile picture)

The profile picture is changed through the following page:

![Change Profile Picture](wireframes/Change%20Profile%20Pic.png)

- This page enables users to change their profile picture.

# Profile / Group Feed

![Profile / Group Feed](wireframes/Group%20Feed.png)

- This page enables users to view the profile of another user or a group, and request their friendship or group invitation.