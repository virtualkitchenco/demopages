## Features

### 1. Menu Item Management
- Display menu items in a grid layout with images and descriptions
- Mark menu items as 86'd (unavailable) with a specific reason
  - 86'd items are visually indicated with a diagonal "86ed" ribbon
- Un-86 items when they become available again
- Each menu item displays associated ingredients and equipment as badges

### 2. Ingredient Tracking
- View and manage ingredient inventory through an interactive sidebar
- Mark ingredients as out of stock
  - Out-of-stock ingredients are displayed in red in the sidebar
- Update ingredient counts through a modal interface:
  - On-hand count: Current available quantity
  - Wasted count: Amount discarded or lost
  - Received count: New inventory received
- Filter menu items based on ingredient availability
  - Ingredients are represented by badges on each menu item
  - Active (in-stock) ingredient badges are green
  - Inactive (out-of-stock) ingredient badges are gray with a small "Out" ribbon

### 3. Equipment Management
- Track equipment status (on/off) through toggles and badges
- Filter menu items based on equipment availability
- Equipment toggles and badges are color-coded:
  - Active (available) equipment is displayed in blue
  - Inactive (unavailable) equipment is displayed in gray

### 4. Advanced Mode
- Toggle between basic and advanced views
- Advanced view provides additional features:
  - Visible equipment toggles in the filter area
  - "86" and "Un86" buttons on menu items
  - Clickable reason badges for quick un-86ing

### 5. Sidebar Functionality
- Search for ingredients using a text input
- Sort ingredients by name (alphabetically) or count (numerically)
- View all ingredients with their current counts
- Color-coding for ingredient status:
  - Normal ingredients displayed in default text color
  - Out-of-stock ingredients displayed in red

### 6. Real-time Updates
- Submit changes button appears when modifications are made
- Clicking submit updates the system in real-time
- Changes are saved to local storage for persistence between sessions

### 7. Visual Indicators
- Color-coding system for quick status identification:
  - Green: Active ingredients and toggles
  - Blue: Active equipment
  - Gray: Inactive ingredients and equipment
  - Red: Out-of-stock ingredients, 86'd item ribbons
- Badges on menu items provide at-a-glance information about ingredients and equipment

### 8. Modal Interfaces
- Ingredient Modal:
  - Update on-hand count
  - Record wasted and received amounts
  - Quick "Out of Stock" button for setting count to zero
- Equipment Modal:
  - Simple interface to turn equipment on or off

### 9. Responsive Design
- Adapts to different screen sizes for use on various devices
- Sidebar can be hidden on smaller screens for better space utilization

### 10. Data Persistence
- Uses local storage to maintain state between browser sessions
- Allows for offline use and quick loading of previous states

### 11. Search and Filter
- Real-time filtering of ingredients in the sidebar as you type
- Dynamically updates menu item visibility based on ingredient and equipment filters

### 12. Undo Functionality
- Cancel buttons in modals allow for easy reverting of unintended changes
- Un-86 functionality to quickly make items available again




### How to start the server

```
serve
```
- open http://localhost:3000 in the browser