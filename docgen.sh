#!/bin/bash

# Docgen doesn't work by reading the index.js file so need to manually choose files
# to run against..

files=(
  'Avatars/Avatar'
  #'Buttons/FlatButton'
  #'Buttons/FloatingButton'
  #'Buttons/IconButton'
  #'Buttons/RaisedButton'
  #'Cards/Card'
  #'Cards/CardActionOverlay'
  #'Cards/CardActions'
  #'Cards/CardMedia'
  #'Cards/CardText'
  #'Cards/CardTitle'
  #'Chips/Chip'
  'DataTables/DataTable'
  'DataTables/TableBody'
  'DataTables/TableColumn'
  'DataTables/TableHeader'
  'DataTables/TableRow'
  'DataTables/EditDialogColumn'
  #'Dialogs/DialogContainer'
  #'Dividers/Divider'
  #'FABTransitions/SpeedDial'
  #'FontIcons/FontIcon'
  #'Lists/List'
  #'Lists/ListItem'
  #'Lists/ListItemControl'
  #'Menus/Menu'
  #'NavigationDrawers/NavigationDrawer'
  #'Papers/Paper'
  #'Pickers/DatePickerContainer'
  #'Pickers/TimePickerContainer'
  #'Progress/CircularProgress'
  #'Progress/LinearProgress'
  'SelectFields/SelectField'
  #'SelectionControls/Checkbox'
  #'SelectionControls/RadioGroup'
  #'SelectionControls/Radio'
  #'SelectionControls/Switch'
  #'Sidebars/Sidebar'
  #'Sliders/Slider'
  #'Snackbars/Snackbar'
  #'Subheaders/Subheader'
  #'Tabs/Tab'
  #'Tabs/Tabs'
  'TextFields/TextField'
  #'Toolbars/Toolbar'
)

for file in "${files[@]}"; do
  component=`echo $file | cut -d '/' -f 2`
  source=src/js/$file.js
  out=src/docgen/$component.json
  react-docgen ../react-md/$source --pretty --resolver findAllComponentDefinitions -o $out

  # Remove first line '['
  sed -i -e '1d' $out

  # Remove last line ']'
  sed -i -e '$ d' $out

  # Insert file path after first '{'
  sed -i -e 's#^  {#  {\'$'\n    "source": "'$source'",#' $out

  # Insert component name after first '{'
  sed -i -e 's/^  {/  {\'$'\n    "component": "'$component'",/' $out
  echo Created docgen at $out
done
rm src/docgen/*-e
